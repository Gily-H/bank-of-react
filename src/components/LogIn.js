import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";

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
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                onChange={handleChange}
                value={user.userName}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button>Log In</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn;
