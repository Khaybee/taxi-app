"use client";
import { signIn } from "next-auth/react"
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import "../../styles/auth.css";
import Swal from 'sweetalert2'
import { css } from '@emotion/react';
import { useRef } from "react";
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL



const Form = () => {

  const router = useRouter();
  const emailRef = useRef()
  const passwordRef = useRef()
  const fullNameRef = useRef()
  const emailRef2 = useRef()
  const passwordRef2 = useRef()
  const confirmPasswordRef = useRef()
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const signup = async (event) => {
    event.preventDefault()
    toast.loading('Please wait')
    const name = fullNameRef.current.value
    const email = emailRef2.current.value
    const password = passwordRef2.current.value
    const confirmPassword = confirmPasswordRef.current.value

    if (password !== confirmPassword) {
      return setConfirmPasswordError('Passwords do not match');
    }

    const formData = {
      name: name,
      email: email,
      password: password
    }

    try {
      const response = await fetch(`${apiUrl}/api/signup`, {
        method: 'POST',
        body: JSON.stringify(formData),
        cache: 'no-store',
      })

      const data = await response.json()

      if (response.status === 200) {
        // User registered
        toast.dismiss()
        toast.success("OTP Sent");

        // Wait for 5 seconds before redirecting
        setTimeout(() => {
            router.push(`/otp/${email}`);
        }, 5000); // 5000 milliseconds = 5 seconds
      }
      else if (response.status === 400) {
        toast.dismiss()
        toast.error(data.error);
      }
      else if (response.status === 401) {
        toast.dismiss()
        toast.error(data.error);
      } else if (response.status === 409) {
        toast.error(data.error);
      } else if (response.status === 400) {
        toast.error("Server Error!");
      } else {
        toast.error("Oops! Something went wrong. Please try again later.");
      }

      // if (data.success === true) {
      //   toast.dismiss()
      //   toast.success('An OTP has been sent to your registered Email')
      //   setTimeout(() => {
      //     router.replace('/otp');
      //   }, 1000);

      // } else if (data.success === false) {
      //   toast.dismiss()
      //   toast.error('something went wrong')
      // }

    } catch (error) {
      console.error('An error occurred:', error);
    }



  }

  const login = async event => {
    toast.loading('Please wait');
    event.preventDefault()
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (result.error) {
        toast.dismiss()
        toast.error(result.error);
      } else {
        toast.dismiss()
        toast.success('Login success')
        router.push('/dash/enter-address');
      }

    } catch (error) {
      console.error('Error signing in:', error);
    }
  }


  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

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
                  <input type="text" ref={emailRef} placeholder="Email Address" required />
                </div>
                <div className="field mt-4">
                  <input type="password" ref={passwordRef} placeholder="Password" required />
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
                  <input type="submit" value="Login" onClick={login} />
                </div>
                <div className="signup-link mt-2">
                  Not a member? <Link href="" className="links-color">Signup now</Link>
                </div>


              </form>


              <form className="signup" >
                <div className="field">
                  <input type="text"
                    name="fullName" placeholder="Fullname" ref={fullNameRef} required />
                </div>
                <div className="field">
                  <input type="email"
                    name="email" placeholder="Email Address" ref={emailRef2} required />
                </div>
                <div className="field">
                  <input type="password"
                    name="password" placeholder="Password" ref={passwordRef2} required />
                </div>
                {passwordError && <p className="error">{passwordError}</p>}
                <div class="field">
                  <input
                    type="password"
                    ref={confirmPasswordRef}
                    placeholder="Confirm password"
                    required
                  />
                  {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
                </div>
                <div className="field btns">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" onClick={signup} />
                </div>
                <div className="signup-link mt-2"> Already have an account?{" "}
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