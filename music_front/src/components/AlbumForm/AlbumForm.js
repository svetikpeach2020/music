import React, {Component} from "react";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {fetchArtists} from "../../store/actions/artistsActions";
import FormElement from "../UI/Form/FormElement";

class AlbumForm extends Component {
    state = {
        title: "",
        image: "",
        artist: "",
        year: 0
    };

    onSubmitForm = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    };

    onChangeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    onChangeFileHandler = e => {
        this.setState({image: e.target.files[0]});
    };

    componentDidMount() {
        this.props.onFetchArtists();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmitForm}>
                <FormElement
                    title="Title"
                    type="text"
                    fieldName="title"
                    required={true}
                    placeholder="Album title"
                    value={this.state.title}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Year"
                    type="number"
                    fieldName="year"
                    required={true}
                    placeholder="Album year"
                    value={this.state.year}
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
                    title="Image"
                    type="file"
                    fieldName="image"
                    onChange={this.onChangeFileHandler}
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
        artists: state.artists.artists
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchArtists: () => dispatch(fetchArtists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);