import React from "react";
import AlbumListItem from "./AlbumListItem/AlbumListItem";

const AlbumList = props => {
    return (
        <div>
            {
                props.albums.map(album => {
                    return (
                        <AlbumListItem
                            key={album._id}
                            id={album._id}
                            title={album.title}
                            image={album.image}
                            year={album.year}
                            artist={album.artist}
                            countTracks={album.countTracks}
                            user={props.user}
                            onDeleted={() => props.onDeleted(album._id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default AlbumList;