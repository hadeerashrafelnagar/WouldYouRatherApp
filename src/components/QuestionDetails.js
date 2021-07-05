import React from "react";
import { connect } from "react-redux";
import { answerQuestion } from "../handlers/questionsApiData";
import Swal from "sweetalert2";
import QuestionVoteCard from "./QuestionVoteCard";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";

class QuestionDetails extends React.Component {
  state = {
    choice: "",
    choicetext: "",
  };

  handleAnswer = (e) => {
    this.setState({ choice: e.target.value });
    this.setState({ choicetext: e.target.name });
  };

  handleSubmit = (user, qid) => {
    let answer = this.state.choice;
    qid = qid.id;
    user = user.id;

    if (answer === "") {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "you have to choose an option!",
      });
    } else {
      answerQuestion(user, qid, answer);
      Swal.fire({
        icon: "success",
        title: "Yes...",
        titleText: "your answer has been submitted",
      });
      <QuestionVoteCard></QuestionVoteCard>;
    }
  };

  handleAnsweredQue = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "you already have answered this question!",
    });
  };

  render() {
    const { questionDetails, authUser, users, questions } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          {!Object.keys(questions).includes(questionDetails.id) && authUser ? (
            <ErrorPage></ErrorPage>
          ) : (
            <div className="row row-cols-5">
              <div className="col">
                <img src={users[questionDetails.author].avatarURL} alt="Logo" />
              </div>
              <div className="col">
                <h3 className="title">{questionDetails.author} asks:</h3>
              </div>
              <div className="col-7">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between ">
                    <h5>Would You Rather...</h5>
                  </li>
                  <li className="list-group-item d-flex justify-content-between ">
                    {questionDetails.optionOne.votes.includes(authUser.id) ? (
                      <input
                        checked
                        disabled
                        value="optionOne"
                        className="btn-check"
                        type="radio"
                        id="choice1"
                        name="choice"
                        aria-label="Radio button for following text input"
                      />
                    ) : (
                      <input
                        onClick={(e) => this.handleAnswer(e)}
                        value="optionOne"
                        className="btn-check"
                        type="radio"
                        id="choice1"
                        name={questionDetails.optionOne.text}
                        aria-label="Radio button for following text input"
                      />
                    )}
                    <label className="btn btn-outline-info" htmlFor="choice1">
                      {questionDetails.optionOne.text}
                    </label>
                    <span className="badge bg-primary rounded-pill">
                      Votes: {questionDetails.optionOne.votes.length}
                    </span>
                    <span className="badge bg-primary rounded-pill">
                      Percentage:{" "}
                      {Math.round(
                        (questionDetails.optionOne.votes.length /
                          Object.keys(users).length) *
                          100
                      )}
                      %
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between ">
                    {questionDetails.optionTwo.votes.includes(authUser.id) ? (
                      <input
                        checked
                        disabled
                        value="optionTwo"
                        className="btn-check"
                        type="radio"
                        id="choice2"
                        name="choice"
                        aria-label="Radio button for following text input"
                      />
                    ) : (
                      <input
                        onClick={(e) => this.handleAnswer(e)}
                        value="optionTwo"
                        className="btn-check"
                        type="radio"
                        id="choice2"
                        name={questionDetails.optionTwo.text}
                        aria-label="Radio button for following text input"
                      />
                    )}
                    <label className="btn btn-outline-info" htmlFor="choice2">
                      {questionDetails.optionTwo.text}
                    </label>
                    <span className="badge bg-primary rounded-pill">
                      Votes: {questionDetails.optionTwo.votes.length}
                    </span>
                    <span className="badge bg-primary rounded-pill">
                      Percentage:{" "}
                      {Math.round(
                        (questionDetails.optionTwo.votes.length /
                          Object.keys(users).length) *
                          100
                      )}
                      %
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    {questionDetails.optionOne.votes.includes(authUser.id) ||
                    questionDetails.optionTwo.votes.includes(authUser.id) ? (
                      <button
                        onClick={this.handleAnsweredQue}
                        type="submit"
                        className="btn btn-outline-info"
                      >
                        Submit
                      </button>
                    ) : (
                      <Link
                        to={{
                          pathname: `/queVote`,
                          state: {
                            choicetext: this.state.choicetext,
                            choice: this.state.choice,
                          },
                        }}
                      >
                        <button
                          onClick={() =>
                            this.handleSubmit(authUser, questionDetails)
                          }
                          type="submit"
                          className="btn btn-outline-info"
                        >
                          Submit
                        </button>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  questionDetails: state.questionDetails,
  authUser: state.authUser,
  users: state.users,
  questions: state.questions,
  answerInfo: state.answerInfo,
});

export default connect(mapStateToProps)(QuestionDetails);
