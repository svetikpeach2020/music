import axios from "../../axios-api";
import {
    FETCH_ADMIN_ALBUMS_SUCCESS,
    FETCH_ADMIN_ARTISTS_SUCCESS,
    FETCH_ADMIN_TRACKS_SUCCESS, FETCH_DELETE_SUCCESS,
    FETCH_ERROR, FETCH_PUBLISH_SUCCESS,
    FETCH_REQUEST
} from "../actionTypes";

const fetchAdminArtistsSuccess = artists => {
    return {type: FETCH_ADMIN_ARTISTS_SUCCESS, artists};
};

const fetchAdminAlbumsSuccess = albums => {
    return {type: FETCH_ADMIN_ALBUMS_SUCCESS, albums};
};

const fetchAdminTracksSuccess = tracks => {
    return {type: FETCH_ADMIN_TRACKS_SUCCESS, tracks};
};
const fetchPublishSuccess = () => {
    return {type: FETCH_PUBLISH_SUCCESS};
};
const fetchDeleteSuccess = () => {
    return {type: FETCH_DELETE_SUCCESS};
};

const fetchRequest = () => {
    return {type: FETCH_REQUEST};
};
const fetchError = error => {
    return {type: FETCH_ERROR, error};
};

export const fetchAdminArtists = () => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get("/admin/artists").then(response => {
            dispatch(fetchAdminArtistsSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};

export const fetchAdminAlbums = () => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get("/admin/albums").then(response => {
            dispatch(fetchAdminAlbumsSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};

export const fetchAdminTracks = () => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.get("/admin/tracks").then(response => {
            dispatch(fetchAdminTracksSuccess(response.data));
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const publishArtist = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.put(`/artists/${id}/publish`).then(() => {
            dispatch(fetchPublishSuccess());
            dispatch(fetchAdminArtists());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const publishAlbum = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.put(`/albums/${id}/publish`).then(() => {
            dispatch(fetchPublishSuccess());
            dispatch(fetchAdminAlbums());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const publishTrack = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.put(`/tracks/${id}/publish`).then(() => {
            dispatch(fetchPublishSuccess());
            dispatch(fetchAdminTracks());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const deleteArtist = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.delete(`/artists/${id}`).then(() => {
            dispatch(fetchDeleteSuccess());
            dispatch(fetchAdminArtists());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const deleteAlbum = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.delete(`/albums/${id}`).then(() => {
            dispatch(fetchDeleteSuccess());
            dispatch(fetchAdminAlbums());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};
export const deleteTrack = (id) => {
    return dispatch => {
        dispatch(fetchRequest());
        return axios.delete(`/tracks/${id}`).then(() => {
            dispatch(fetchDeleteSuccess());
            dispatch(fetchAdminTracks());
        }, error => {
            dispatch(fetchError(error));
        });
    };
};