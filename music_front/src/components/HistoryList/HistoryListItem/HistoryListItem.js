import React from "react";
import Moment from "react-moment";
import {Card, CardBody} from "reactstrap";
import PropTypes from "prop-types";

const HistoryListItem = props => {
    return (
        <Card>
            <CardBody>
                <h2>Artist {
                    props.albums.filter(c => {
                        return c._id.toString() === props.track.album.toString()
                    }).map(c => c.artist.name)
                }</h2>
                <h3>Track title "{props.track.title}"</h3>
                <p>Datetime: <Moment format="DD/MM/YYYY. HH:mm:ss">{props.datetime}</Moment></p>
            </CardBody>
        </Card>
    );
};

HistoryListItem.propTypes = {
    id: PropTypes.string.isRequired,
    track: PropTypes.object.isRequired,
    datetime: PropTypes.string.isRequired,
    albums: PropTypes.array
};

export default HistoryListItem;