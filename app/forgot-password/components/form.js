"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
// import "../../styles/auth.css";
import "../../styles/forgot_pwd.css"
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import InputOTP from "./otp-forgotPass";

const apiUrl = process.env.NEXT_PUBLIC_API_URL


const sendForgotData = async (formData) => {
  try {

    const res = await fetch(`${apiUrl}/api/forgot-password`, {
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

    localStorage.setItem('email', formData.email);
    localStorage.setItem('authToken', authToken);

    console.log(data);
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Not done yet
const sendResetData = async (formData) => {
  try {
    const email = localStorage.getItem('email');
    const res = await fetch(`${apiUrl}/api/reset-password`, {
      method: 'POST',
      body: JSON.stringify(formData, email),
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

    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

console.log(process.env.NEXT_PUBLIC_API_URL);

const ForgotPasswordForm = () => {

  const router = useRouter();

  const [resetFormData, setresetFormData] = useState({
    password: '',
  });


  const [ForgotFormData, setForgotFormData] = useState({
    email: '',
  });


  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setresetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleForgotChange = (e) => {
    const { name, value } = e.target;
    setForgotFormData((prev) => ({
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


  };


    // for modal otp page
    const [visible, setVisible] = useState(false);

    function makeVisible() {
      setVisible(true);
    }
  
    const handleFormSubmit = (formData) => {
      const result = sendData(formData); 
  
      return result;
    };

  const handleForgotSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendForgotData(ForgotFormData);

      if (response.success === true) {
        Swal.fire({
          title: response.message,
          text: "Click on reset to set your new password",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });

        setForgotFormData([])
     
        makeVisible()

        // router.replace('/otp');

      } else if (response.success === false) {
        console.log(response.message);
        
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
        text: `Something went wrong!: ${error}`,

      });
    }
  };


  const handleResetSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await sendResetData(resetFormData);

      if (response.success === true) {

        Swal.fire({
          title: response.message,
          text: "Proceed to login",
          icon: "success",
          showConfirmButton: false,
          timer: 2000
        });
        resetFormData([])


        setTimeout(() => {
          router.replace('/auth');
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

    signupBtn.onclick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };

    loginBtn.onclick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };

    
  }, []); // Empty array ensures this runs once after component mounts

  return (
    <>

{visible && ( <div className="form-body">
      <InputOTP />
    </div>
      
    )}  
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
              Forgot Password?
              <p className="smallFont">Enter email to reset</p>
            </div>
            <div className="title signup">
              Reset Password
              <p className="smallFont">Enter a new password</p>
            </div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label for="login" className="slide login">
                Forgot?
              </label>
              <label for="signup" className="slide signup">
                Reset
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              <form className="login" >
                <div className="field mt-4">
                  <input type="text"
                    name="email"
                    value={ForgotFormData.email}
                    onChange={handleForgotChange} placeholder="Email Address" required />
                </div>
     

                
                <div className="field btns mt-4">
                  <div className="btn-layer"></div>
                  <input type="submit" value="RESET" onClick={handleForgotSubmit} />
                </div>
                
              </form>
              <form className="signup" >
               
             
            
                <div className="field mt-4">
                  <input type="password"
                    name="password"
                    value={resetFormData.password}
                    onChange={handleResetChange} placeholder="Password" required />
                </div>
                
                <div className="field btns mt-4">
                  <div className="btn-layer"></div>
                  <input type="submit" value="RESET" onClick={handleResetSubmit} />
                </div>
        
              </form>
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}

export default ForgotPasswordForm;