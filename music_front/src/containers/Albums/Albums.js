import React, {Component} from "react";
import queryString from "query-string";
import AlbumList from "../../components/AlbumList/AlbumList";
import {connect} from "react-redux";
import {fetchAlbums} from "../../store/actions/albumsActions";
import {deleteAlbum} from "../../store/actions/adminsActions";

class Albums extends Component {
    state = {
        artist: []
    }
    artistArr = queryString.parse(this.props.location.search);

    componentDidMount() {
        const artist = this.props.artists.filter(c => {
            return c._id.toString() === this.artistArr.artist
        })
        this.props.onFetchAlbums(this.artistArr.artist);
        this.setState({artist})
    }

    onDeleted = (album) => {
        this.props.onDeletedAlbum(album).then(() => this.props.onFetchAlbums(this.artistArr.artist));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.albums !== prevProps.albums ) {
            this.props.onFetchAlbums(this.artistArr.artist);
        }
    }

    render() {
        return (
            <>
                <h1>Artist {this.state.artist.map(c => c.name)}</h1>
                <h2>
                    Albums
                </h2>
                <AlbumList
                    albums={this.props.albums}
                    user={this.props.user}
                    onDeleted={this.onDeleted}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums.albums,
        artists: state.artists.artists,
        user: state.users.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchAlbums: (id) => dispatch(fetchAlbums(id)),
        onDeletedAlbum: (id) => dispatch(deleteAlbum(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Albums);