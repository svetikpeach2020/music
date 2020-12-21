import React, {Component} from "react";
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../UI/Form/FormElement";

class ArtistForm extends Component {
    state = {
        name: "",
        description: "",
        photo: ""
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
        this.setState({photo: e.target.files[0]});
    };


    render() {
        return (
            <Form onSubmit={this.onSubmitForm}>
                <FormElement
                    title="Artist name"
                    type="text"
                    fieldName="name"
                    required={true}
                    placeholder="Artist name"
                    value={this.state.name}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Description"
                    type="textarea"
                    fieldName="description"
                    placeholder="Artist description"
                    value={this.state.description}
                    onChange={this.onChangeInputHandler}
                />
                <FormElement
                    title="Photo"
                    type="file"
                    fieldName="photo"
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

export default ArtistForm;