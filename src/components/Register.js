// import axios from "axios";
import React, { useState } from "react";
import "../css/Register.css";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const register = useLocation().pathname === "/register";
  
  const { signup, login } = useAuth({ loginURL: "/gigs" });

  return (
    <div className="wrapper login">
      <div className="container">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome!</h2>
            <p>
              {register ? "Already have an account?" : "Don't have an account?"}
            </p>
            <Link to={register ? "/login" : "/register"} className="btn">
              {register ? "Sign In" : "Sign Up"}
            </Link>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>{register ? "Register" : "Login"}</h2>
            <div action="">
              <p>
                <label>
                  Email address<span>*</span>
                </label>
                <input
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="Username or Email"
                  required
                />
              </p>
              <p>
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </p>
              <p>
                <button
                  onClick={
                    register ? () => signup(user, pwd) : () => login(user, pwd)
                  }
                >{register ? "Sign Up" : "Sign In"}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
