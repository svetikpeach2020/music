import React from "react";
import {NavLink as RouterLink} from "react-router-dom";
import {
  Container,
  Nav, Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";
import AnonymousMenu from "./Menus/AnonymousMenu";
import UserMenu from "./Menus/UserMenu";
import CreateMenu from "./Menus/CreateMenu";

const Toolbar = props => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand tag={RouterLink} to="/" exact>
          Music-x
        </NavbarBrand>
        <Nav className="ml-auto align-items-sm-center" navbar>
          <NavItem>
            <NavLink tag={RouterLink} to="/" exact>Artists</NavLink>
          </NavItem>
          <CreateMenu/>
          {props.user ? <UserMenu user={props.user} logout={props.logout} /> : <AnonymousMenu/>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;