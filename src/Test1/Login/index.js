import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //errors
  const [errorEmail, setErrEmail] = useState("");
  const [errorPass, setErrPass] = useState("");
  const users = useSelector((state) => state.users);
  const handleLogin = () => {
    if (!email && !pass) {
      setErrEmail("Email is Required!");
      setErrPass("Password is Required!");
    }

    const payload = users.find(
      (user) => user.email === email && user.pass === pass
    );
    if (payload) {
      dispatch({
        type: "LOGIN",
        payload: {},
      });
      alert("Login Successfully....");
    } else {
      alert("Invalid email or password!!");
    }
  };

  return (
    <div className="body">
      <div className="form">
        <h2 className="title">Login</h2>
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

export default Login;
