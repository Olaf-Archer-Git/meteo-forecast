import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  setName,
  setLogin,
  setPassword,
  setConfirm,
} from "../../store/features/authSlice";

import "./SignUpPage.scss";

const SignUpPage = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const conditions =
    state.login !== "" &&
    state.password !== "" &&
    state.password === state.confirm &&
    state.name !== "";

  return (
    <div className="signUp">
      <div className="signUp-container">
        <h2 className="signUp-title">Create Account</h2>
        <form className="signUp-form">
          <input
            className="signUp-input"
            placeholder="name"
            onChange={(event) => dispatch(setName(event.target.value))}
          />
          <br />
          <input
            className="signUp-input"
            placeholder="email"
            type="email"
            onChange={(event) => dispatch(setLogin(event.target.value))}
          />
          <br />
          <input
            className="signUp-input"
            placeholder="password"
            required="required"
            onChange={(event) => dispatch(setPassword(event.target.value))}
          />
          <br />
          <input
            className="signUp-input"
            placeholder="confirm password"
            onChange={(event) => dispatch(setConfirm(event.target.value))}
          />
        </form>

        <button className="signUp-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <button className={`signUp-btn ${conditions ? "" : "signUp-disabled"}`}>
          <Link className="signUp-link" to="/">
            join us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
