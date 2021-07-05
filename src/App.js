import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import NewQue from "./components/NewQue";
import LeaderBoard from "./components/LeaderBoard";
import Home from "./components/Questions";
import QuestionVoteCard from "./components/QuestionVoteCard";
import QuestionDetails from "./components/QuestionDetails";
import ErrorPage from "./components/PrivateRoute";
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
            <Route path="/" component={SignIn}></Route>
          </Switch>
        ) : (
          <>
            <Nav></Nav>
            <Switch>
              <Route path="/questions/error" component={ErrorPage}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/add" component={NewQue}></Route>
              <Route path="/leaderboard" component={LeaderBoard}></Route>
              <Route path="/questions/:id" component={QuestionDetails}></Route>
              <Route path="/queVote" component={QuestionVoteCard}></Route>
            </Switch>
          </>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(App);
