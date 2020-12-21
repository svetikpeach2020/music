import React from "react";
import config from "../../../../config";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterLink} from "react-router-dom";

const UserMenu = props => {
    const style = {
        width: "50px",
        borderRadius: "50%"
    }
    let avatarImage = `${config.apiURL}/uploads/${props.user.avatarImage}`;
    if (props.user.facebookId) {
        avatarImage = props.user.avatarImage;
    }
    return (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Hello, {props.user.displayName || props.user.username} &nbsp;
                {
                    props.user.avatarImage &&
                    <img style={style} src={avatarImage} alt={`avatar`}/>
                }
            </DropdownToggle>
            <DropdownMenu right>
                {
                    props.user.role === "user" &&
                    <>
                        <DropdownItem tag={RouterLink} to="/track_history" exact>
                            Track_history
                        </DropdownItem>
                        <DropdownItem divider />
                    </>
                }
                {
                    props.user.role === "admin" &&
                    <>
                        <DropdownItem tag={RouterLink} to="/admin" exact>
                            Admin page
                        </DropdownItem>
                        <DropdownItem divider />
                    </>
                }
                <DropdownItem onClick={props.logout} >
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default UserMenu;