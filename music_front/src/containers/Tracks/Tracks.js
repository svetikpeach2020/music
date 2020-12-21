import React, {Component} from "react";
import queryString from "query-string";
import TrackList from "../../components/TrackList/TrackList";
import {fetchTracks} from "../../store/actions/tracksActions";
import {connect} from "react-redux";
import {fetchTrackHistory} from "../../store/actions/trackHistoriesActions";
import {deleteTrack} from "../../store/actions/adminsActions";

class Tracks extends Component {
    state = {
        album: []
    }
    albumArr = queryString.parse(this.props.location.search)

    componentDidMount() {
        const album = this.props.albums.filter(c => {
            return c._id.toString() === this.albumArr.album
        });
        this.props.onFetchTracks(this.albumArr.album);
        this.setState({album});
    }

    onFetchTrack = (id) => {
        this.props.onFetchTrack(id);
    }

    onDeleted = (track) => {
        this.props.onDeletedTrack(track).then(() => this.props.onFetchTracks(this.albumArr.album));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.tracks !== prevProps.tracks ) {
            this.props.onFetchTracks(this.albumArr.album);
        }
    }

    render() {
        return (
            <>
                <h1>
                    Artist {this.state.album.map(c => c.artist.name)}
                </h1>
                <h2>
                    Album {this.state.album.map(c => c.title)}
                </h2>
                <h3>
                    Tracks
                </h3>
                <TrackList
                    onFetchTrack={this.onFetchTrack}
                    tracks={this.props.tracks}
                    user={this.props.user}
                    onDeleted={this.onDeleted}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracks: state.tracks.tracks,
        albums: state.albums.albums,
        user: state.users.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchTracks: (id) => dispatch(fetchTracks(id)),
        onFetchTrack: (id) => dispatch(fetchTrackHistory(id)),
        onDeletedTrack: (id) => dispatch(deleteTrack(id))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Tracks);