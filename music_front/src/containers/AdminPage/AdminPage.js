import React, {Component} from "react";
import {connect} from "react-redux";
import {
    deleteAlbum,
    deleteArtist, deleteTrack,
    fetchAdminAlbums,
    fetchAdminArtists,
    fetchAdminTracks,
    publishAlbum,
    publishArtist, publishTrack
} from "../../store/actions/adminsActions";
import AlbumAdminList from "../../components/AlbumAdminList/AlbumAdminList";
import {fetchArtists} from "../../store/actions/artistsActions";
import TrackAdminList from "../../components/TrackAdminList/TrackAdminList";
import ArtistAdminList from "../../components/ArtistAdminList/ArtistAdminList";


class AdminPage extends Component {

    componentDidMount() {
        this.props.onFetchArtists();
        this.props.onFetchAdminArtists();
        this.props.onFetchAdminAlbums();
        this.props.onFetchAdminTracks();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.artists !== prevProps.artists &&
            this.props.onFetchArtists !== prevProps.onFetchArtists) {
            this.props.onFetchArtists();
        }
        if (this.props.artistsAdmin !== prevProps.artistsAdmin &&
            this.props.onFetchAdminArtists !== prevProps.onFetchAdminArtists) {
            this.props.onFetchAdminArtists();
        }
        if (this.props.albumsAdmin !== prevProps.albumsAdmin &&
            this.props.onFetchAdminAlbums !== prevProps.onFetchAdminAlbums) {
            this.props.onFetchAdminAlbums();
        }
        if (this.props.tracksAdmin !== prevProps.tracksAdmin &&
            this.props.onFetchAdminTracks !== prevProps.onFetchAdminTracks) {
            this.props.onFetchAdminTracks();
        }
    }

    render() {
        return (
            <>
                {
                    this.props.artistsAdmin &&
                    <>
                        <h1>Artists</h1>
                        <ArtistAdminList
                            artists={this.props.artistsAdmin}
                            onPublished={this.props.onPublishArtist}
                            onDeleted={this.props.onDeletedArtist}
                        />
                    </>
                }
                {
                    this.props.albumsAdmin &&
                    <>
                        <h1>Albums</h1>
                        <AlbumAdminList
                            albums={this.props.albumsAdmin}
                            onPublished={this.props.onPublishAlbum}
                            onDeleted={this.props.onDeletedAlbum}
                        />
                    </>
                }
                {
                    this.props.tracksAdmin &&
                    <>
                        <h1>Tracks</h1>
                        <TrackAdminList
                            tracks={this.props.tracksAdmin}
                            artists={this.props.artists}
                            onPublished={this.props.onPublishTrack}
                            onDeleted={this.props.onDeletedTrack}
                        />
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        artistsAdmin: state.admins.artists,
        artists: state.artists.artists,
        albumsAdmin: state.admins.albums,
        tracksAdmin: state.admins.tracks,
        error: state.admins.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtists()),
        onFetchAdminArtists: () => dispatch(fetchAdminArtists()),
        onFetchAdminAlbums: () => dispatch(fetchAdminAlbums()),
        onFetchAdminTracks: () => dispatch(fetchAdminTracks()),
        onPublishArtist: (id) => dispatch(publishArtist(id)),
        onPublishAlbum: (id) => dispatch(publishAlbum(id)),
        onPublishTrack: (id) => dispatch(publishTrack(id)),
        onDeletedArtist: (id) => dispatch(deleteArtist(id)),
        onDeletedAlbum: (id) => dispatch(deleteAlbum(id)),
        onDeletedTrack: (id) => dispatch(deleteTrack(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);