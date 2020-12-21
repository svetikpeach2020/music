import React from "react";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const CreateMenu = () => {
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Create...
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem tag={RouterLink} to="/artists/new" exact>
                    Artist
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterLink} to="/albums/new" exact>
                    Album
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RouterLink} to="/tracks/new" exact>
                    Track
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default CreateMenu;