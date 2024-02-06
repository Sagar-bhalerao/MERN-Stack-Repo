import "./Login.css";
import Loginimg from "../images/login.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const history = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const Postdata = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const Data = res.json();
    if (res.status === 400 || !Data) {
      alert("Invalid Credentials");
    } else {
      alert(" user login successfully");
      history("/");
    }
  };
  return (
    <>
      <section>
        <div className="container-l">
          <h2 className="Titlel">Login in</h2>
          <div className="Left-sidecontent-l  ">
            <figure>
              <img className="imgl" src={Loginimg} alt="registration"></img>
              <NavLink className="Alinkl" to="/Signup">
                doesn't have an account
              </NavLink>
              <h1>hi</h1>
            </figure>
          </div>

          <div className="right-sidecontent-l ">
            <form method="POST">
              <div className="input-field-l">
                <div className="form-group">
                  <label for="email">Email:</label>
                  <label for="text" className="form-icon-emaill ">
                    <i class="zmdi zmdi-email "></i>
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your email"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    id="email"
                    value={email}
                  />
                </div>

                <div className="form-group">
                  <label for="pws">Password:</label>
                  <label for="text" className="form-icon-pwdl">
                    <i class="zmdi zmdi-lock "></i>
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Your password"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    id="pwd"
                    value={password}
                  />
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" />{" "}
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={Postdata}
                >
                  Submit
                </button>
              </div>
              {/* <hr className="Stick" color="black"></hr> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
