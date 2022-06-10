import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { useDispatch } from "react-redux";

function Registration() {
  const dispatch = useDispatch("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");

  //errors
  const [errorFname, setErrFname] = useState("");
  const [errorLname, setErrLname] = useState("");
  const [errorMob, setErrMob] = useState("");
  const [errorGen, setErrGen] = useState("");
  const [errorEmail, setErrEmail] = useState("");
  const [errorPass, setErrPass] = useState("");

  const handleRegister = () => {
    if (!fname && !lname && !email && !mobile && !gender && !pass) {
      setErrFname("FirstName is Required!");
      setErrLname("LastName is Required!");
      setErrMob("Mobile is Required!");
      setErrGen("Gender is Required!");
      setErrEmail("Email is Required!");
      setErrPass("Password is Required!");
    }

    dispatch({
      type: "REGISTER",
      payload: {
        fname,
        lname,
        mobile,
        gender,
        email,
        pass,
      },
    });
  };

  return (
    <div className="body">
      <div className="form">
        <h2 className="title">Register</h2>
        <div className="block">
          <label>First Name</label>

          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              setFname(e.target.value);
              setErrFname("");
            }}
          />
          {errorFname && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorFname}</div>
          )}
        </div>

        <div className="block">
          <label>Last Name</label>
          <input
            type="text"
            name="lasttName"
            onChange={(e) => {
              setLname(e.target.value);
              setErrLname("");
            }}
          />
          {errorLname && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorLname}</div>
          )}
        </div>

        <div className="block">
          <label> Mobile</label>
          <input
            type="text"
            name="mobile"
            onChange={(e) => {
              setMobile(e.target.value);
              setErrMob("");
            }}
          />
          {errorMob && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorMob}</div>
          )}
        </div>

        <div className="block">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
              setErrGen("");
            }}
          />
          {errorGen && (
            <div style={{ fontSize: "12px", color: "red" }}>{errorGen}</div>
          )}
        </div>

        <div className="block">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrLname("");
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
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Registration;
