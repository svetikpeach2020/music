import React from "react";
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const AnonymousMenu = () => {
    return (
        <>
            <NavItem>
                <NavLink tag={RouterLink} to="/sign-up" exact>Sign up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RouterLink} to="/sign-in" exact>Login</NavLink>
            </NavItem>
        </>
    );
};

export default AnonymousMenu;
