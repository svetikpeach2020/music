import {FETCH_HISTORIES_SUCCESS, FETCH_ERROR} from "../actionTypes";

const initialState = {
    histories: [],
    error: null
};

const trackHistoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HISTORIES_SUCCESS:
            return {...state, histories: action.histories};
        case FETCH_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default trackHistoriesReducer;