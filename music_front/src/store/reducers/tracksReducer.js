import {FETCH_TRACKS_SUCCESS, FETCH_ERROR} from "../actionTypes";

const initialState = {
    tracks: [],
    error: null
};

const albumsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TRACKS_SUCCESS:
            return {...state, tracks: action.tracks};
        case FETCH_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default albumsReducer;