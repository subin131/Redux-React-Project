import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Test1/style.css";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  const dispatch = useDispatch("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //flag to watch user list
  const [flag, setFlag] = useState(false);

  //errors
  const [errorEmail, setErrEmail] = useState("");
  const [errorPass, setErrPass] = useState("");
  // user list
  const userList = useSelector((state) => state.userList);
  const handleLogin = () => {
    if (!email && !pass) {
      setErrEmail("Email is Required!");
      setErrPass("Password is Required!");
    }

    const payload = userList.find(
      (user) => user.email === email && user.pass === pass
    );
    if (payload) {
      dispatch({
        type: "WATCHUSER",
        payload: {},
      });
    } else {
      alert("Invalid email or password!!");
    }
  };

  return (
    <div className="body">
      <div className="form">
        <h2 className="title">Watching User List</h2>
        <div className="block">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrEmail("");
            }}
          />
          {errorEmail && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorEmail}</div>
          )}
        </div>

        <div className="block">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPass(e.target.value);
              setErrPass("");
            }}
          />
          {errorPass && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorPass}</div>
          )}
        </div>
        <button
          type="botton"
          className="btn btn-success buttons mt-2"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default UserList;
