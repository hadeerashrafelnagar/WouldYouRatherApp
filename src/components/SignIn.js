import React from "react";
import { connect } from "react-redux";
import { getUsers, setAuthUser } from "../handlers/usersApiData";
import Swal from "sweetalert2";

class SignIn extends React.Component {
  state = {
    userId: "",
  };

  componentDidMount() {
    getUsers();
    const {
      location: { pathname },
    } = this.props;
    this.referrer = pathname;
  }

  handleSignIn = (e) => {
    e.preventDefault();
    this.setState({ userId: e.target.value });
  };

  handleSubmit = () => {
    const { history } = this.props;
    const { userId } = this.state;
    setAuthUser(userId);
    if (userId === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must select a user!",
      });
    }
    if (this.referrer === "/signin") {
      this.setState({ value: "" });
      history.push("/home");
    } else {
      this.setState({ value: "" });
      history.push(this.referrer);
    }
  };

  render() {
    const { users } = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Welcome to</h5>
            <h3 className="card-subtitle mb-2">Would You Rather?</h3>
            <h5 className="card-title">App</h5>
            <p className="card-text">please to continue sign in</p>
            <select
              onChange={(e) => this.handleSignIn(e)}
              defaultValue={"default"}
              className="form-select form-select-focus-box-shadow"
            >
              <option disabled value="default">
                Select your name
              </option>
              {users &&
                Object.keys(users)
                  .map((userId) => ({
                    id: users[userId].id,
                    name: users[userId].name,
                  }))
                  .map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name}
                    </option>
                  ))}
            </select>
            <button
              onClick={this.handleSubmit}
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
  users: state.users,
  authUser: state.users.user,
});

export default connect(mapStateToProps)(SignIn);
