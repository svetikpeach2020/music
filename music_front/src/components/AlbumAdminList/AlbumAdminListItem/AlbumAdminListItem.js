import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import PropTypes from "prop-types";
import AlbumThumbnail from "../../AlbumThumbnail/AlbumThumbnail";

const AlbumAdminListItem = props => {
    return (
        <Card>
            <CardBody>
                {
                    props.image &&
                        <AlbumThumbnail
                            image={props.image}
                            title={props.title}
                        />
                }
                <h3>Artist '{props.artist.name}'</h3>
                <h4>
                    Title album '{props.title}'
                </h4>
                <p>Year: {props.year}</p>
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

AlbumAdminListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    year: PropTypes.number.isRequired
};

export default AlbumAdminListItem;