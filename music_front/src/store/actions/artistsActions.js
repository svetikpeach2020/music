import {CREATE_ARTIST_SUCCESS, FETCH_ARTISTS_SUCCESS, FETCH_ERROR, FETCH_REQUEST} from "../actionTypes";
import axios from "../../axios-api";

const fetchArtistsSuccess = artists => {
    return {type: FETCH_ARTISTS_SUCCESS, artists};
};
const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};
const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const fetchArtists = () => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get("/artists").then(response => {
            dispatch(fetchArtistsSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};

const createArtistSuccess = () => {
    return {type: CREATE_ARTIST_SUCCESS};
};

export const createArtist = artist => {
    return dispatch => {
        return axios.post("/artists", artist).then(() => {
            dispatch(createArtistSuccess());
        });
    };
};
