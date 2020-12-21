import React from "react";
import config from "../../config";

const ArtistThumbnail = props => {

  const photo = config.apiURL + "/uploads/" + props.photo;

  return <img src={photo} alt={props.name} style={{
    float: "left",
    width: "100px",
    height: "auto",
    marginRight: "15px"
  }} />
};

export default ArtistThumbnail;