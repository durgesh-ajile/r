/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="logindiv">
      <div className="testimonial">
        <label className="testimonialtitle">RoadRider Testimonials</label>
        <div className="testimonialmain">
          <p className="testimonialmainpara">
            Being a female traveller i often faced issues like safety. taking
            nap while travelling was a challenge. now i can happily rely on
            roadjett without any fear. The best part is that they always have a
            female prevence system.
          </p>
          <div className="testimonialmaininner">
            <div className="usercomment">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/F25081/standing-woman.png"
                alt="standing-woman"
                className="womensvg"
              />
              <h3 className="username">
                Pranitha (Software Techie @Microsoft)
              </h3>
            </div>
            <button className="testimonialreadmebtn">Read More</button>
          </div>
        </div>
      </div>
      <div className="loginmaindiv">
        <div className="welcomemsg">
          <h3 className="loginheading">Login</h3>
          <h6 className="loginsubheading">
            Welcome back! Please log in to access your account.
          </h6>
        </div>

        <div className="logininputdiv">
          <label className="emaillabel">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            className="emaiinput"
          ></input>
          <label className="passwordlabel">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="passwordinput"
          ></input>
          <a href="" className="forgotpass">
            Forgot Password ?
          </a>
        </div>
        <div className="buttondiv">
          <button className="loginbutton">Login</button>
          <button className="googlebutton">
            <div className="googlealign">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
                className="googlelogo"
              />
              <span className="googlelabel">Login with Google</span>
            </div>
          </button>
          <label className="signup">
            Don't have an account ?{" "}
            <a href="" className="signupbutton">
              Sign Up
            </a>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/000000/down-left-arrow.png"
              alt="down-left-arrow"
              className="arrowright"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
