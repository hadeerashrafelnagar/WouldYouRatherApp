import React from "react";
import {
  usersQuestions,
  showingQueDetails,
} from "../handlers/questionsApiData";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    showComponent: "true",
  };

  componentDidMount() {
    usersQuestions();
  }

  showAnswered = () => {
    this.setState({ showComponent: "false" });
  };

  showUnAnswered = () => {
    this.setState({ showComponent: "true" });
  };

  handleQueDetails = (que, e) => {
    return showingQueDetails(que, e.target.value);
  };

  render() {
    const { questions, authUser } = this.props;

    return (
      <React.Fragment>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <button
              onClick={this.showUnAnswered}
              type="submit"
              className="btn btn-outline-info"
            >
              Unanswered Questions
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={this.showAnswered}
              type="submit"
              className="btn btn-outline-info"
            >
              Answered Questions
            </button>
          </li>
        </ul>
        {this.state.showComponent === "true" ? (
          <div className="container">
            {questions &&
              Object.values(questions)
                .filter(
                  (question) =>
                    !question.optionOne.votes.includes(authUser.id) &&
                    !question.optionTwo.votes.includes(authUser.id)
                )
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((q) => ({
                  author: q.author,
                  optionone: q.optionOne.text,
                  optiontwo: q.optionTwo.text,
                  id: q.id,
                }))
                .map((q) => (
                  <div key={q.id} className="row row-cols-3">
                    <div className="cols">
                      <h3 className="title">{q.author} asks:</h3>
                    </div>
                    <div className="col-8">
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between ">
                          <h5>Would You Rather...</h5>
                          <p className="optionone">{q.optionone}</p>
                          <br></br>
                          <p className="optiontwo">{q.optiontwo}</p>
                          <Link to={`/quedetails/${q.id}`}>
                            <button
                              type="button"
                              value={q.id}
                              onClick={(e) =>
                                this.handleQueDetails(questions, e)
                              }
                              className="btn btn-outline-info"
                            >
                              View Poll
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
          </div>
        ) : (
          <div className="container">
            {questions &&
              Object.values(questions)
                .filter(
                  (question) =>
                    question.optionOne.votes.includes(authUser.id) ||
                    question.optionTwo.votes.includes(authUser.id)
                )
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((q) => ({
                  author: q.author,
                  optionone: q.optionOne.text,
                  optiontwo: q.optionTwo.text,
                  id: q.id,
                }))
                .map((q) => (
                  <div key={q.id} className="row row-cols-3">
                    <div className="cols">
                      <h3 className="title">{q.author} asks:</h3>
                    </div>
                    <div className="col-8">
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between ">
                          <h5>Would You Rather...</h5>
                          <p className="optionone">{q.optionone}</p>
                          <br></br>
                          <p className="optiontwo">{q.optiontwo}</p>
                          <Link to={`/quedetails/${q.id}`}>
                            <button
                              value={q.id}
                              onClick={(e) =>
                                this.handleQueDetails(questions, e)
                              }
                              type="button"
                              className="btn btn-outline-info"
                            >
                              View Poll
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  authUser: state.authUser,
  questionDetails: state.questionDetails,
  users: state.users,
});

export default connect(mapStateToProps)(Home);
