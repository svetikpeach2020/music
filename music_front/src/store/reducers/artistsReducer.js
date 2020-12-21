import {FETCH_ARTISTS_SUCCESS, FETCH_ERROR} from "../actionTypes";

const initialState = {
    artists: [],
    error: null
};

const artistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTISTS_SUCCESS:
            return {...state, artists: action.artists};
        case FETCH_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default artistsReducer;