import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { users, questionanswer, newQuestion, authUser } = props;

  return (
    <React.Fragment>
      <div className="container">
        {Object.values(users)
          .sort(
            (a, b) =>
              b.questions.length +
              Object.keys(b.answers).length -
              (a.questions.length + Object.keys(a.answers).length)
          )
          .map((user) => ({
            useravatar: user.avatarURL,
            name: user.name,
            id: user.id,
            answeredque: Object.keys(user.answers).length,
            askedque: user.questions.length,
          }))
          .map((user) => (
            <div key={user.id} className="row row-cols-4">
              <div className="col">
                <img src={user.useravatar} alt="Logo" />
              </div>
              <div className="cols">
                <h3 className="title">{user.name}</h3>
              </div>
              <div className="col-2">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between ">
                    Answered Questions
                    {user.id === authUser.id ? (
                      <span className="badge rounded-pill">
                        {user.answeredque + Object.keys(questionanswer).length}
                      </span>
                    ) : (
                      <span className="badge rounded-pill">
                        {user.answeredque}
                      </span>
                    )}
                  </li>
                  <li className="list-group-item d-flex justify-content-between ">
                    Asked Questions
                    {user.id === authUser.id ? (
                      <span className="badge rounded-pill">
                        {user.askedque + Object.keys(newQuestion).length}
                      </span>
                    ) : (
                      <span className="badge rounded-pill">
                        {user.askedque}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h5 className="title">Score</h5>
                {(newQuestion || questionanswer) && user.id === authUser.id ? (
                  <span className="badge bg-primary rounded-pill">
                    {user.answeredque +
                      Object.keys(questionanswer).length +
                      (user.askedque + Object.keys(newQuestion).length)}
                  </span>
                ) : (
                  <span className="badge bg-primary rounded-pill">
                    {user.answeredque + user.askedque}
                  </span>
                )}
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  authUser: state.authUser,
  questionanswer: state.questionanswer,
  newQuestion: state.newQuestion,
});

export default connect(mapStateToProps)(LeaderBoard);
