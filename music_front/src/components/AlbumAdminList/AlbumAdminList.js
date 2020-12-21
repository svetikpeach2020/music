import React from "react";
import AlbumAdminListItem from "./AlbumAdminListItem/AlbumAdminListItem";

const AlbumAdminList = props => {
    return (
        <div>
            {
                props.albums.map(album => {
                    return (
                        <AlbumAdminListItem
                            key={album._id}
                            id={album._id}
                            title={album.title}
                            image={album.image}
                            year={album.year}
                            artist={album.artist}
                            onPublished={() => props.onPublished(album._id)}
                            onDeleted={() => props.onDeleted(album._id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default AlbumAdminList;