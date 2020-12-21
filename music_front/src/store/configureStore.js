import {createBrowserHistory} from "history";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import artistsReducer from "../store/reducers/artistsReducer";
import albumsReducer from "../store/reducers/albumsReducer";
import tracksReducer from "../store/reducers/tracksReducer";
import usersReducer from "../store/reducers/usersReducer";
import trackHistoriesReducer from "../store/reducers/trackHistoriesReducer";
import adminsReducer from "../store/reducers/adminsReducer";
import thunkMiddleware from 'redux-thunk';
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    users: usersReducer,
    histories: trackHistoriesReducer,
    admins: adminsReducer,
    router: connectRouter(history)
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(()=> {
   saveToLocalStorage({
       users: {
           user: store.getState().users.user
       }
   });
});

export default store;