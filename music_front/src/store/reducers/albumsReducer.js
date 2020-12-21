import {FETCH_ALBUMS_SUCCESS, FETCH_ERROR} from "../actionTypes";

const initialState = {
    albums: [],
    error: null
};

const albumsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return {...state, albums: action.albums};
        case FETCH_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default albumsReducer;