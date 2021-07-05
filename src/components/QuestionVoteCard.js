import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const QuestionCard = (props) => {
  const { questionDetails, users, authUser } = props;
  const location = useLocation();
  const { choice, choicetext } = location.state;

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h3 className="card-subtitle mb-2">Your answer is :</h3>
          <h5 className="card-title">{choicetext}</h5>
          <p className="card-text">
            {questionDetails[choice].votes.length + 1} out of 3 Votes
          </p>
          <span className="badge bg-primary rounded-pill">
            Percentage:{" "}
            {Math.round(
              (questionDetails[choice].votes.concat(authUser).length /
                Object.keys(users).length) *
                100
            )}
            %
          </span>
          <Link to="/home">
            <button type="submit" className="btn btn-outline-info">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  questionDetails: state.questionDetails,
  users: state.users,
  authUser: state.authUser,
});

export default connect(mapStateToProps)(QuestionCard);
