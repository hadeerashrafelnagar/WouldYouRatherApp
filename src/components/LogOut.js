import { useHistory } from "react-router-dom";
import { React } from "react";

const LogOut = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/signin");
    window.location.reload();
  };
  return (
    <button onClick={handleClick} className="btn btn-outline-info">
      Log Out
    </button>
  );
};
export default LogOut;
