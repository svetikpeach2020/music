import axios from "../../axios-api";
import {NotificationManager} from "react-notifications";
import {FETCH_ERROR, FETCH_HISTORIES_SUCCESS, FETCH_REQUEST} from "../actionTypes";
import {push} from "connected-react-router";

const fetchHistoriesSuccess = histories => {
    return {type: FETCH_HISTORIES_SUCCESS, histories};
};
const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};
const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const fetchHistories = () => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get(`/track_history`).then(response => {
            dispatch(fetchHistoriesSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
            dispatch(push("/sign-in"));
        });
    };
};

export const fetchTrackHistory = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.post(`/track_history`, {track: id}).then(() => {
            NotificationManager.success("track added in Track History");
        }, error => {
            dispatch(fetchError(error));
            dispatch(push("/sign-in"));
        });
    };
};

