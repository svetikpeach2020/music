import React from "react";
import TrackAdminListItem from "./TrackAdminListItem/TrackAdminListItem";

const TrackAdminList = props => {
    return (
        <div>
            {
                props.tracks.map(track => {
                    return (
                        <TrackAdminListItem
                            key={track._id}
                            id={track._id}
                            title={track.title}
                            longtime={track.longtime}
                            album={track.album}
                            numTrack={track.numTrack}
                            artists={props.artists}
                            onPublished={() => props.onPublished(track._id)}
                            onDeleted={() => props.onDeleted(track._id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default TrackAdminList;