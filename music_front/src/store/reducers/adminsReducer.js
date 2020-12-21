import {
    FETCH_ADMIN_ALBUMS_SUCCESS,
    FETCH_ADMIN_ARTISTS_SUCCESS,
    FETCH_ADMIN_TRACKS_SUCCESS,
    FETCH_ERROR
} from "../actionTypes";

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
    error: null
};

const adminsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADMIN_ARTISTS_SUCCESS:
            return {...state, artists: action.artists};
        case FETCH_ADMIN_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_ADMIN_TRACKS_SUCCESS:
            return {...state, tracks: action.tracks};
        case FETCH_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default adminsReducer;