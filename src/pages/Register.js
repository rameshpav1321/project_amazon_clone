import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../Amazon_Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../redux/actions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.data);
  const history = useNavigate();
  useEffect(() => {
    if (user) {
      history("/");
    }
  }, [user, history]);
  let dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={AmazonLogo} className="register-logo" alt="logo"></img>
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
          <div className="detail">
            <p>Already have an account?</p>
            <Link to="/login" className="signin-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
