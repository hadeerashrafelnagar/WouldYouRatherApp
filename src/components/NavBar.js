import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LogOut from "./LogOut";

class Nav extends React.Component {
  render() {
    const { authUser } = this.props;

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h3 className="navbar-brand">Would You Rather!</h3>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">
                  Leader Board
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/add">
                  New Question
                </NavLink>
              </li>

              <li className="nav-item">
                {<img src={authUser["avatarURL"]} alt="userimage"></img>}
              </li>

              <li className="nav-item">
                {<h4 className="nav-link"> {authUser["name"]}</h4>}
              </li>

              <li className="nav-item">
                <LogOut />
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(Nav);
