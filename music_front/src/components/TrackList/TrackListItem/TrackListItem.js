import React from "react";
import "./TrackListItem.css";
import {Button, Card, CardBody} from "reactstrap";
import PropTypes from "prop-types";
import moment from 'moment';

const TrackListItem = props => {
    return (
        <Card>
            <CardBody>
                <div className="card_track" onClick={props.onFetchTrack}>
                    <h4>№ {props.numTrack} </h4>
                    <h3> Name: {props.title}</h3>
                    <p>
                        {
                            moment.unix(props.longtime).utc().format("mm:ss")
                        }
                    </p>
                </div>
                {
                    props.user && props.user.role && (props.user.role === "admin") &&
                    <Button onClick={props.onDeleted} color="warning">
                        Delete
                    </Button>
                }
            </CardBody>
        </Card>
    );
};

TrackListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    longtime: PropTypes.number.isRequired,
    numTrack: PropTypes.number.isRequired
};

export default TrackListItem;