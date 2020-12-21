import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import PropTypes from "prop-types";
import ArtistThumbnail from "../../ArtistThumbnail/ArtistThumbnail";

const ArtistAdminListItem = props => {
  return (
    <Card>
      <CardBody>
          <ArtistThumbnail
            photo={props.photo}
            name={props.name}
          />
        <h2>
          {props.name}
        </h2>
        <p>'{props.description}'</p>
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

ArtistAdminListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default ArtistAdminListItem;