"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "../../styles/auth.css";
import Swal from 'sweetalert2'
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const apiUrl = process.env.NEXT_PUBLIC_API_URL



const sendData = async (formData) => {
  try {

    const res = await fetch(`${apiUrl}/api/signup`, {
      method: 'POST',
      body: JSON.stringify(formData),
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    const authToken = data.data

    localStorage.setItem('authToken', authToken);

    sessionStorage.setItem('email', formData.email);
    console.log(data);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const LoginData = async (formData, rememberMe) => {
  try {
    const res = await fetch(`${apiUrl}/api/login`, {
      method: 'POST',
      body: JSON.stringify(formData),
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    console.log(data);

    const authToken = data.data

    if (rememberMe) {
      // Store the token in localStorage for long-term persistence
      localStorage.setItem('authToken', authToken);
    } else {
      // Store the token in session storage for short-term persistence
      sessionStorage.setItem('authToken', authToken);
    }
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

console.log(process.env.NEXT_PUBLIC_API_URL);

const Form = () => {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [isLoading, setIsLoading] = useState(false);


  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'password') {
      if (!(value.length >= 6 && /[A-Za-z]/.test(value) && /[0-9]/.test(value))) {
        setPasswordError('Password must have at least: 6 characters, one letter and one number');
      } else {
        setPasswordError('');
      }
    }

    // Reset confirm password error if user edits password
    if (name === 'confirmPassword') {

      if (value !== formData.password) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
      }

    }


  };


  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await LoginData(loginFormData, rememberMe);

      setIsLoading(false);

      if (response.success === true) {
        Swal.fire({
          title: response.message,
          text: "Welcome to SaveDrive",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });


        setLoginFormData({
          email: '',
          password: '',
        })

        setRememberMe(false)

        router.push('/enter-address');

      } else if (response.success === false) {
        if (response.message === "Please verify your email") {
          setIsLoading(false);
          Swal.fire({
            icon: "warning",
            title: "One more step",
            text: response.message,
            showConfirmButton: false,
            timer: 2000
          });

          router.replace('/otp');
        } else {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
            showConfirmButton: false,
            timer: 2000
          });
        }


        // toast.error(response.message, {
        //   position: "top-center"
        // });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",

      });
    } finally {
      // Set loading state back to false after receiving the response
      setIsLoading(false);
    }
  };


  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    try {

      // Check if password and confirm password match
      if (formData.password !== formData.confirmPassword) {
        // toast.error('Passwords do not match');
        setConfirmPasswordError('Passwords do not match');
        return;
      } else {
        setConfirmPasswordError('');
      }
      const response = await sendData(formData);

      if (response.success === true) {

        Swal.fire({
          title: response.message,
          text: "A One-Time Verification Pin has been sent to your email. Use it to verify your email.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000
        });
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        })


        setTimeout(() => {
          router.replace('/otp');
        }, 1000);

      } else if (response.success === false) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.message,
          showConfirmButton: false,
          timer: 2000
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
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

        <div className="wrapper shadow-lg">
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

                  <input type="text"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange} placeholder="Email Address" required />
                </div>
                <div className="field  mt-4">
                  <input type="password" name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange} placeholder="Password" required />
                </div>

                <div className="d-flex justify-content-between align-items-center mt-2 pass-link">
                  <div className="d-flex align-items-center ms-2">
                    <input type="checkbox"
                      checked={rememberMe}
                      onChange={handleCheckboxChange} id="rememberMe" className="me-1" />
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
                  <input type="submit" value="Login" onClick={handleSubmitLogin} />
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
                {passwordError && <p className="error">{passwordError}</p>}
                <div class="field">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    required
                  />
                  {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                </div>
                <div className="field btns">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" onClick={handleSubmitSignup} />
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
      </div>
    </>
  );
}

export default Form;