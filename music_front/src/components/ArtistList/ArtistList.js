import React from "react";
import ArtistListItem from "./ArtistListItem/ArtistListItem";

const ArtistList = props => {
  return (
    <div>
      {
        props.artists.map(artist => {
          return (
            <ArtistListItem
              key={artist._id}
              id={artist._id}
              name={artist.name}
              photo={artist.photo}
              user={props.user}
              onDeleted={() => props.onDeleted(artist._id)}
            />
          );
        })
      }
    </div>
  );
};

export default ArtistList;