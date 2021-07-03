import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn";
import NewQue from "./components/NewQue";
import LeaderBoard from "./components/LeaderBoard";
import Home from "./components/Questions";
import QuestionDetails from "./components/QuestionDetails";
import Nav from "../src/components/NavBar";
import "./App.css";

class App extends React.Component {
  handleSecurity = () => {
    if (Object.keys(this.props.authUser).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.authUser).length === 0 ? (
          <Switch>
            <Route path="/signin" component={SignIn}></Route>
          </Switch>
        ) : (
          <>
            <Nav></Nav>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={NewQue}></Route>
              <Route path="/leaderboard" component={LeaderBoard}></Route>
              <Route path="/quedetails/:id" component={QuestionDetails}></Route>
            </Switch>
          </>
        )}
        <Redirect exact from="/" to="/signin" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(App);
