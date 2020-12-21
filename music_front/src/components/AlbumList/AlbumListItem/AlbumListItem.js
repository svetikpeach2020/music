import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AlbumThumbnail from "../../AlbumThumbnail/AlbumThumbnail";

const AlbumListItem = props => {
    return (
        <Card>
            <CardBody>
                {
                    props.image &&
                    <Link to={`/tracks?album=${props.id}`}>
                        <AlbumThumbnail
                            image={props.image}
                            title={props.title}
                        />
                    </Link>
                }
                <Link to={`/tracks?album=${props.id}`}>
                    Title album '{props.title}'
                </Link>
                <p>Year: {props.year}</p>
                <p>Count tracks in album - {props.countTracks}</p>
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

AlbumListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    year: PropTypes.number.isRequired,
    countTracks: PropTypes.number
};

export default AlbumListItem;