import React from "react";
import {Button, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ArtistThumbnail from "../../ArtistThumbnail/ArtistThumbnail";

const ArtistListItem = props => {
  return (
    <Card>
      <CardBody>
        <Link to={`/albums?artist=${props.id}`}>
          <ArtistThumbnail
            photo={props.photo}
            name={props.name}
          />
        </Link>
        <Link to={`/albums?artist=${props.id}`}>
          {props.name}
        </Link>
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

ArtistListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default ArtistListItem;