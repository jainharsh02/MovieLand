// import axios from "axios";
import React, { useState } from "react";
import "../css/Register.css";
import { useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const register = useLocation().pathname === "/register";
  const { signup, login } = useAuth({ loginURL: "/" });

  return (
    <div class="wrapper login">
      <div class="container">
        <div class="col-left">
          <div class="login-text">
            <h2>Welcome!</h2>
            <p>
              {register ? "Already have an account?" : "Don't have an account?"}
            </p>
            <a href="/" class="btn">
              {register ? "Sign In" : "Sign Up"}
            </a>
          </div>
        </div>
        <div class="col-right">
          <div class="login-form">
            <h2>{register ? "Register" : "Login"}</h2>
            <form action="">
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
                <input
                  onClick={
                    register ? () => signup(user, pwd) : () => login(user, pwd)
                  }
                  type="submit"
                  value={register ? "Sign Up" : "Sign In"}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
