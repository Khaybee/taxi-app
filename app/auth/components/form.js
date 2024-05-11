"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "../../styles/auth.css";

const Form = ({ onSubmit }) => {

     const [formData, setFormData] = useState({
          fullName: '',
          email: '',
          password: '',
        });

        const [popup, setPopup] = useState({
          show: false,
          message: "It all failed",
          type: "error", // "success" or "error"
        });

        const handleShowPopup = (message, type) => {
          setPopup({ show: true, message, type });
        };

        useEffect(()  => {
          document.body.style.overflow = 'hidden';
      
          return () => {
              document.body.style.overflow = 'scroll';
          };
      }, []);


        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
      
        const handleSubmit = (e) => {
          e.preventDefault(); // Prevent default form submission behavior
          // onSubmit(formData); // Send the data to the parent component or server

          onSubmit(formData)
          .then((response) => {
            // Check the response and call `handleShowPopup` based on the result
            if (response.success === true) {
              handleShowPopup("Account created successfully!", "success");
              console.log(`show: ${popup.show} message: ${popup.message} type: ${popup.type}`);
            } else {
              handleShowPopup("An error occurred. Please try again.", "error");
              console.log(`show: ${popup.show} message: ${popup.message} type: ${popup.type}`);
            }
          })
          .catch((error) => {
            handleShowPopup("An error occurred. Please try again.", "error");
            console.log(`show: ${popup.show} message: ${popup.message} type: ${popup.type}`);
          });
        };


  useEffect(() => {
    // Add the JavaScript interactivity
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link .links-color");

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
              <form className="login" >
                <div className="field mt-4">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field  mt-4">
                  <input type="password" placeholder="Password" required />
                </div>
               
                <div className="d-flex justify-content-between align-items-center mt-2 pass-link">
                  <div className="d-flex align-items-center ms-2">
                    <input type="checkbox" id="rememberMe" className="me-1" />
                    <label htmlFor="rememberMe" className="">
                      Remember Me
                    </label>
                  </div>
                  <Link href="#" className="links-color fw-medium">
                    Forgot password?
                  </Link>
                </div>
                <div className="field btns mt-4">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link mt-2">
                  Not a member? <Link href="" className="links-color">Signup now</Link>
                </div>
              </form>
              <form className="signup" >
                <div className="field">
                  <input type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange} placeholder="Fullname" required />
                </div>
                <div className="field">
                  <input type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange} placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange} placeholder="Password" required />
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
                  <input type="submit" value="Signup" onClick={handleSubmit}/>
                </div>
                <div className="signup-link mt-2">
                  Already have an account?{" "}
                  <Link href="" className="links-color">
                    Login now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
          {/* Conditional rendering for popup */}
          {popup.show && (
          <div className={`popup ${popup.type}`}>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ ...popup, show: false })}>Close</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;