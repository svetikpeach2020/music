import {
    FETCH_TRACKS_SUCCESS,
    FETCH_ERROR,
    FETCH_REQUEST,
    CREATE_TRACK_SUCCESS
} from "../actionTypes";
import axios from "../../axios-api";

const fetchTracksSuccess = tracks => {
    return {type: FETCH_TRACKS_SUCCESS, tracks};
};
const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};
const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const fetchTracks = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get(`/tracks?album=${id}`).then(response => {
            dispatch(fetchTracksSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};

const createTrackSuccess = () => {
    return {type: CREATE_TRACK_SUCCESS};
};

export const createTrack = track => {
    return dispatch => {
        return axios.post("/tracks", track).then(() => {
            dispatch(createTrackSuccess());
        });
    };
};