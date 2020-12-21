import {Route, Switch} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import React from "react";
import {Redirect} from "react-router";
import Artists from "./containers/Artists/Artists";
import Albums from "./containers/Albums/Albums";
import Tracks from "./containers/Tracks/Tracks";
import Histories from "./containers/Histories/Histories";
import NewArtist from "./containers/NewArtist/NewArtist";
import NewAlbum from "./containers/NewAlbum/NewAlbum";
import NewTrack from "./containers/NewTrack/NewTrack";
import AdminPage from "./containers/AdminPage/AdminPage";

const ProtectedRoute = props => {
    return props.isAllowed ?
        <Route {...props} /> : <Redirect to={props.redirectTo} />;
};

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" component={Artists} exact />
            <Route path="/albums" component={Albums} exact />
            <Route path="/tracks" component={Tracks} exact />
            <Route path="/artists/new" component={NewArtist} exact />
            <Route path="/albums/new" component={NewAlbum} exact />
            <Route path="/tracks/new" component={NewTrack} exact />

            <ProtectedRoute
                path="/admin"
                component={AdminPage}
                exact
                isAllowed={user && user.role === "admin"}
                redirectTo="/sign-in"
            />
            <ProtectedRoute
                path="/track_history"
                component={Histories}
                exact
                isAllowed={user && user.role === "user"}
                redirectTo="/sign-in"
            />
            <ProtectedRoute
                path="/sign-up"
                component={Register}
                exact
                isAllowed={!user}
                redirectTo="/"
            />
            <ProtectedRoute
                path="/sign-in"
                component={Login}
                exact
                isAllowed={!user}
                redirectTo="/"
            />
            <Route render={() => {
                return <>
                    <h1 style={{textAlign: "center"}}>
                        Page Not Found <br/>
                        <small>404</small>
                    </h1>
                </>
            }} />
        </Switch>
    );
};

export default Routes;

