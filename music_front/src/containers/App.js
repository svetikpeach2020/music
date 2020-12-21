import React, {Component, Fragment} from "react";
import Toolbar from "../components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {logoutUser} from "../store/actions/usersActions";
import {NotificationContainer} from "react-notifications";
import Routes from "../Routes";

class App extends Component {
  render() {
    return (
        <Fragment>
            <NotificationContainer/>
          <header className="mb-3">
            <Toolbar
                user={this.props.user}
                logout={this.props.logoutUser}
            />
          </header>
          <main>
            <Container>
                <Routes user={this.props.user}/>
            </Container>
          </main>
        </Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    };
};

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
