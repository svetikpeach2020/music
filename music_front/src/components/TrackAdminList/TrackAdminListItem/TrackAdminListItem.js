import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import PropTypes from "prop-types";
import moment from 'moment';

const TrackAdminListItem = props => {
    return (
        <Card>
            <CardBody>
                <h4>{
                    props.artists.filter(c => {
                        return c._id.toString() === props.album.artist
                    }).map(c => c.name)
                }</h4>
                <h4>Album '{props.album.title}'</h4>
                <h4>№ {props.numTrack}</h4>
                <h4> Name: {props.title}</h4>
                <p>
                    {
                        moment.unix(props.longtime).utc().format("mm:ss")
                    }
                </p>
                <Button onClick={props.onPublished} color="primary">
                    Publish
                </Button>
                <Button onClick={props.onDeleted} color="warning">
                    Delete
                </Button>
            </CardBody>
        </Card>
    );
};

TrackAdminListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    longtime: PropTypes.number.isRequired,
    numTrack: PropTypes.number.isRequired
};

export default TrackAdminListItem;