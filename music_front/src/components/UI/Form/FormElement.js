import React from "react";
import PropTypes from "prop-types";
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const FormElement = props => {
    let formControlChildren;
    if (props.type === "select" && props.options) {
        formControlChildren = props.options.map(option => {
            return <option
                value={option._id}
                key={option._id}
            >
                {option.title || option.name}
            </option>
        });
        formControlChildren.unshift(
            <option
                value=""
                key={1}
            >
                Select {props.title}
            </option>
        );
    }
    return (
        <FormGroup row>
            <Label sm={2} for={props.fieldName}>{props.title}</Label>
            <Col sm={10}>
                <Input
                    type={props.type}
                    name={props.fieldName}
                    id={props.fieldName}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    required={props.required}
                    invalid={!!props.error}
                >
                    {formControlChildren}
                </Input>
                {
                    props.error && <FormFeedback>
                        {props.error}
                    </FormFeedback>
                }
            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    title: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string
}

export default FormElement;