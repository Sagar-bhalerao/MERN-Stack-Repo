import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Signupmod from "../images/singupmod.jpg";
import "./Signup.css";
const Signup = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
  });
  let name, value;
  const InputHandler = (event) => {
    name = event.target.name;
    value = event.target.value;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, phone, work, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, work, password }),
    });
    const data = await res.json();
    console.log(data);
    if (data != email) {
      alert("Invalid creditional");
      console.log("invalid creditional");
    } else {
      alert("Registration successfully");
      console.log("Registration successfully");
      // history.push("/Login");
      navigate("/Login");
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="Left-sidecontent">
            <h2 className="Title">Sign up</h2>
            <form method="POST">
              <div className="input-field">
                <div className="form-group mb-3">
                  <label for="email">Name:</label>
                  <label for="text" className="form-icon">
                    <i class="zmdi zmdi-account "></i>
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your name"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={InputHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email:</label>
                  <label for="text" className="form-icon-email ">
                    <i class="zmdi zmdi-email "></i>
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Your email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={InputHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="phone">Mobile:</label>
                  <label for="text" className="form-icon-phone">
                    <i class="zmdi zmdi-phone-in-talk "></i>
                  </label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Your phone"
                    id="mobile"
                    name="phone"
                    value={user.phone}
                    onChange={InputHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="profession">Work:</label>
                  <label for="text" className="form-icon-work">
                    <i class="zmdi zmdi-slideshow material-icon-name "></i>
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your profession"
                    id="work"
                    name="work"
                    value={user.work}
                    onChange={InputHandler}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="pws">Password:</label>
                  <label for="text" className="form-icon-pwd">
                    <i class="zmdi zmdi-lock "></i>
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Your password"
                    id="pwd"
                    name="password"
                    value={user.password}
                    onChange={InputHandler}
                    required
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
                  onClick={PostData}
                >
                  Submit
                </button>
              </div>
              {/* <hr className="Stick" color="black"></hr> */}
            </form>
          </div>
          <div className="right-sidecontent">
            <figure>
              <img src={Signupmod} alt="registration"></img>
              <NavLink className="Alink" to="/Login">
                already have an account ?
              </NavLink>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
