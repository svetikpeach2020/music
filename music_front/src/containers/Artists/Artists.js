import React, {Component} from "react";
import ArtistList from "../../components/ArtistList/ArtistList";
import {fetchArtists} from "../../store/actions/artistsActions";
import {connect} from "react-redux";
import {deleteArtist} from "../../store/actions/adminsActions";

class Artists extends Component {
    componentDidMount() {
        this.props.onFetchArtists();
    }

    onDeleted = (artist) => {
        this.props.onDeletedArtist(artist).then(() => this.props.onFetchArtists());
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.artists !== prevProps.artists ) {
            this.props.onFetchArtists();
        }
    }

    render() {
        return (
            <>
            <h1>
                Artists
            </h1>
                <ArtistList
                    artists={this.props.artists}
                    user={this.props.user}
                    onDeleted={this.onDeleted}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists.artists,
        user: state.users.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtists()),
        onDeletedArtist: (id) => dispatch(deleteArtist(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);