import {CREATE_ALBUM_SUCCESS, FETCH_ALBUMS_SUCCESS, FETCH_ERROR, FETCH_REQUEST} from "../actionTypes";
import axios from "../../axios-api";

const fetchAlbumsSuccess = albums => {
    return {type: FETCH_ALBUMS_SUCCESS, albums};
};
const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};
const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const fetchAlbums = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get(id ? `/albums?artist=${id}` : "/albums").then(response => {
            dispatch(fetchAlbumsSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};

const createAlbumSuccess = () => {
    return {type: CREATE_ALBUM_SUCCESS};
};

export const createAlbum = album => {
    return dispatch => {
        return axios.post("/albums", album).then(() => {
            dispatch(createAlbumSuccess());
        });
    };
};