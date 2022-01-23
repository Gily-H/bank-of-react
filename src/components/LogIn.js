import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../styles/login.css";

const LogIn = (props) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.mockLogIn(user);
    setRedirect(true);
  }

  return (
    <>
      {redirect ? (
        <Navigate to="userProfile" replace={true} />
      ) : (
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">User Name:</label>
              <input placeholder="..." type="text" name="userName" onChange={handleChange} value={user.userName}/>
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input placeholder="..."  type="password" name="password" />
            </div>
            <button>Log In</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn;
