import React, {Component} from "react";
import ArtistForm from "../../components/ArtistForm/ArtistForm";
import {createArtist} from "../../store/actions/artistsActions";
import {connect} from "react-redux";

class NewArtist extends Component {
    createNewArtist = artist => {
        this.props.onArtistCreated(artist).then(() => {
            this.props.history.push("/");
        });
    };

    render() {
        return (
            <>
                <h1>Create new artist</h1>
                <ArtistForm onSubmit={this.createNewArtist} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onArtistCreated: artist => dispatch(createArtist(artist))
    };
};

export default connect(null, mapDispatchToProps)(NewArtist);