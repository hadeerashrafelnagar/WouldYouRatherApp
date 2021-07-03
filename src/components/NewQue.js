import React from "react";
import { connect } from "react-redux";
import { addNewQuestion } from "../handlers/questionsApiData";
import Swal from "sweetalert2";

class NewQue extends React.Component {
  optionOne = React.createRef();
  optionTwo = React.createRef();

  handleAddOption = (user) => {
    let optionOne = this.optionOne.current.value;
    let optionTwo = this.optionTwo.current.value;
    user = user.id;

    if (optionOne === "" || optionTwo === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must write 2 options!",
      });
    } else {
      addNewQuestion(optionOne, optionTwo, user);
      this.props.history.replace("/home");
    }
  };

  render() {
    const { authUser } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h3 className="card-subtitle mb-2">Create New Question</h3>
            <h5 className="card-title">Would you rather</h5>
            <p className="card-text">
              complete the question by entering two answer options in the text
              fields below:
            </p>
            <input
              ref={this.optionOne}
              className="outline-info"
              type="text"
              placeholder="Enter Option 1"
            />
            <p className="card-text">...OR...</p>
            <input
              ref={this.optionTwo}
              type="text"
              placeholder="Enter Option 2"
            />
            <button
              onClick={() => this.handleAddOption(authUser)}
              type="submit"
              className="btn btn-outline-info"
            >
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  newQuestion: state.newQuestion,
  authUser: state.authUser,
});

export default connect(mapStateToProps)(NewQue);
