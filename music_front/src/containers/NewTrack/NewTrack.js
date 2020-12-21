import React, {Component} from "react";
import TrackForm from "../../components/TrackForm/TrackForm";
import {createTrack} from "../../store/actions/tracksActions";
import {connect} from "react-redux";

class NewTrack extends Component {
    createNewTrack = track => {
        this.props.onTrackCreated(track).then(() => {
            this.props.history.push("/");
        });
    };

    render() {
        return (
            <>
                <h1>Create new track</h1>
                <TrackForm onSubmit={this.createNewTrack} />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTrackCreated: track => dispatch(createTrack(track))
    };
};

export default connect(null, mapDispatchToProps)(NewTrack);