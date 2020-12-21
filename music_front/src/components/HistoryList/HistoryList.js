import React from "react";
import HistoryListItem from "./HistoryListItem/HistoryListItem";

const HistoryList = props => {
    return (
        <div>
            {
                props.histories.map(history => {
                    return (
                        <HistoryListItem
                            key={history._id}
                            id={history._id}
                            track={history.track}
                            datetime={history.datetime}
                            albums={props.albums}
                        />
                    );
                })
            }
        </div>
    );
};

export default HistoryList;