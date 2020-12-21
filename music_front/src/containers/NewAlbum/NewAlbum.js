import React, {Component} from "react";
import AlbumForm from "../../components/AlbumForm/AlbumForm";
import {createAlbum} from "../../store/actions/albumsActions";
import {connect} from "react-redux";

class NewAlbum extends Component {
    createNewAlbum = album => {
        this.props.onAlbumCreated(album).then(() => {
            this.props.history.push("/");
        });
    };

    render() {
        return (
            <>
                <h1>Create new album</h1>
                <AlbumForm onSubmit={this.createNewAlbum} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAlbumCreated: album => dispatch(createAlbum(album))
    };
};

export default connect(null, mapDispatchToProps)(NewAlbum);