import React, {Component} from "react";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import {fetchAlbums} from "../../store/actions/albumsActions";
import FormElement from "../UI/Form/FormElement";

class TrackForm extends Component {
    state = {
        title: "",
        album: "",
        artist: "",
        longtime: 0,
        numTrack: 0
    };

    onSubmitForm = e => {
        e.preventDefault();
        const {title, album, longtime, numTrack} = this.state;
        const track = {title, album, longtime, numTrack};

        this.props.onSubmit(track);
    };

    onChangeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    componentDidMount() {
        this.props.onFetchArtists();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.artist !== prevState.artist) {
            this.props.onFetchAlbums(this.state.artist);
        }
    }


    render() {
        return (
            <Form onSubmit={this.onSubmitForm}>
                <FormElement
                    title="Title"
                    type="text"
                    fieldName="title"
                    required={true}
                    placeholder="Track title"
                    value={this.state.title}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Track longtime"
                    type="number"
                    fieldName="longtime"
                    required={true}
                    placeholder="Track longtime"
                    value={this.state.longtime}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Track number of track"
                    type="number"
                    fieldName="numTrack"
                    required={true}
                    placeholder="Track number of track"
                    value={this.state.numTrack}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Artist"
                    type="select"
                    fieldName="artist"
                    required={true}
                    value={this.state.artist}
                    onChange={this.onChangeInputHandler}
                    options={this.props.artists}
                />
                <FormElement
                    title="Album"
                    type="select"
                    fieldName="album"
                    required={true}
                    value={this.state.album}
                    onChange={this.onChangeInputHandler}
                    options={this.props.albums}
                />
                <FormGroup row>
                    <Col md={{offset: 2, size: 10}}>
                        <Button type="submit" color="primary">
                            Create
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists.artists,
        albums: state.albums.albums
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtists()),
        onFetchAlbums: (id) => dispatch(fetchAlbums(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);