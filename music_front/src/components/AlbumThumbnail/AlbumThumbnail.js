import React from "react";
import config from "../../config";

const AlbumThumbnail = props => {

    const image = `${config.apiURL}/uploads/${props.image}`;

    return <img src={image} alt={props.title} style={{
        float: "left",
        width: "100px",
        height: "auto",
        marginRight: "15px"
    }} />
};

export default AlbumThumbnail;