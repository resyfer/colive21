import { useContext } from "react";
import UserContext from "../context/UserContext";

import { Link, useHistory } from "react-router-dom";

//* CSS
import "./css/Navbar.scss";

//* Components import
import Button from "./Button";
import NoLinkButton from "./NoLinkButton";
import Cookies from "js-cookie";

//! Temporary
const user = {
  id: "abcd",
  organisation: {
    id: "1234",
  },
};

const Navbar = (props) => {
  // const {user, loggedIn} = useContext(UserContext);
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    if (loggedIn) {
      Cookies.remove("user");
      Cookies.remove("jwt");
      setLoggedIn(false);
      setUser(null);
      history.push("/auth");
    }
  };

  return (
    <div className="navbar">
      <Link to={`/user/${user.id}`} className="logo-link">
        <img src="/img/logo.png" className="logo" alt="Errorless" />
      </Link>
      <ul className="nav-items-ctnr">
        <li>
          <Link to={`/user/${user.id}`}>Profile</Link>
        </li>
        <li>
          <Link to={`/institute/${user.organisation.id}`}>Institute</Link>
        </li>
        <li>
          <Link to="/team">About Us</Link>
        </li>
      </ul>
      {loggedIn ? (
        <NoLinkButton name="Logout" onClick={handleLogout} />
      ) : (
        <Button name="Login / Sign Up" link="/auth" />
      )}
    </div>
  );
};

export default Navbar;
