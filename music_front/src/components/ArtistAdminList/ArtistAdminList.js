import React from "react";
import ArtistAdminListItem from "./ArtistAdminListItem/ArtistAdminListItem";

const ArtistAdminList = props => {
  return (
    <div>
      {
        props.artists.map(artist => {
          return (
            <ArtistAdminListItem
              key={artist._id}
              id={artist._id}
              name={artist.name}
              photo={artist.photo}
              description={artist.description}
              onPublished={() => props.onPublished(artist._id)}
              onDeleted={() => props.onDeleted(artist._id)}
            />
          );
        })
      }
    </div>
  );
};

export default ArtistAdminList;