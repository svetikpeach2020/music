import React from "react";
import TrackListItem from "./TrackListItem/TrackListItem";

const TrackList = props => {
    return (
        <div>
            {
                props.tracks.map(track => {
                    return (
                        <TrackListItem
                            key={track._id}
                            id={track._id}
                            title={track.title}
                            longtime={track.longtime}
                            album={track.album}
                            numTrack={track.numTrack}
                            onFetchTrack={() => props.onFetchTrack(track._id)}
                            user={props.user}
                            onDeleted={() => props.onDeleted(track._id)}
                        />
                    );
                })
            }
        </div>
    );
};

export default TrackList;