import React, {Component} from "react";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement";
import {registerUser} from "../../store/actions/usersActions";

class Register extends Component {
    state = {
        username: "",
        password: "",
        displayName: "",
        avatarImage: ""
    };
    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    onChangeFileHandler = e => {
        this.setState({avatarImage: e.target.files[0]});
    };
    submitFormHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });
        this.props.onUserRegistered(formData);
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors &&
            this.props.error.errors[fieldName] &&
            this.props.error.errors[fieldName].properties &&
            this.props.error.errors[fieldName].properties.message;
    };

    render() {
        return (
            <>
                <h1>Register new user</h1>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        type="text"
                        title="Username"
                        fieldName="username"
                        placeholder="Username"
                        required={false}
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError("username")}
                    />
                    <FormElement
                        type="text"
                        title="Display name"
                        fieldName="displayName"
                        placeholder="Display name"
                        required={false}
                        value={this.state.displayName}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError("displayName")}
                    />
                    <FormElement
                        type="password"
                        title="Password"
                        fieldName="password"
                        placeholder="Password"
                        required={false}
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError("password")}
                    />
                    <FormElement
                        title="Avatar"
                        type="file"
                        fieldName="avatarImage"
                        onChange={this.onChangeFileHandler}
                    />
                    <FormGroup row>
                        <Col sm={{offset: 2, size: 1}}>
                            <Button type="submit" color="primary">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.users.registerError
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onUserRegistered: userData => dispatch(registerUser(userData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
