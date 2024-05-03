"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/auth.css";

export default function Home() {
  useEffect(() => {
    // Add the JavaScript interactivity
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");

    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };

    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };

    signupLink.onclick = () => {
      signupBtn.click();
      return false;
    };
  }, []); // Empty array ensures this runs once after component mounts

  return (
    <>
      <div className="auth-body">
        <Head>
          <title>Auth Pages</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <div className="wrapper">
          <div className="title-text">
            <div className="title login">
              Welcome Back
              <p className="smallFont">Enter login details</p>
            </div>
            <div className="title signup">
              Sign Up
              <p className="smallFont">Create your account</p>
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label for="login" className="slide login">
                Login
              </label>
              <label for="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form className="login">
                <div className="field mt-4">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field  mt-4">
                  <input type="password" placeholder="Password" required />
                </div>
                {/* <div className="pass-link">
                <Link href="#">Forgot password?</Link>
                </div> */}
                <div className="d-flex justify-content-between align-items-center mt-2 pass-link">
                  <div className="d-flex align-items-center ms-2">
                    <input type="checkbox" id="rememberMe" className="me-1" />
                    <label htmlFor="rememberMe" className="">
                      Remember Me
                    </label>
                  </div>
                  <Link href="#" className=" fw-medium">
                    Forgot password?
                  </Link>
                </div>
                <div className="field btns mt-4">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link mt-2">
                  Not a member? <Link href="">Signup now</Link>
                </div>
              </form>
              <form className="signup">
                <div className="field">
                  <input type="text" placeholder="Fullname" required />
                </div>
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div class="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="field btns">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
                <div className="signup-link mt-2">
                  Already have an account?{" "}
                  <Link href="" className="">
                    Login now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
