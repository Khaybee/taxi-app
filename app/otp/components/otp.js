"use client"
import React, { useState, useRef, useEffect } from 'react';
import "../../styles/auth.css";
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import getAuthToken from "../../utils/getAuthToken"

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const resendOTPEmail = async () => {
     try {
          const email = sessionStorage.getItem('email');
          console.log(email);
          const res = await fetch(`${apiUrl}/api/resend-otp`, {
               method: 'POST',

               cache: 'no-store',
               headers: {
                    "Content-Type": "application/json",

               },
               body: JSON.stringify({ email })
          })
          if (!res.ok) {

               throw new Error('Failed to fetch data')
          }

          const data = await res.json()


          const authToken = data.data

          localStorage.setItem('authToken', authToken);

          const check = localStorage.getItem('authToken');
          console.log(check);

          return data;
     } catch (error) {
          console.error('An error occurred:', error);
     }
}


const InputOTP = props => {

     const { email } = props

     const [otp, setOtp] = useState(['', '', '', '', '', '']);
     const [isClicked, setIsClicked] = useState(false);

     const inputRefs = useRef([]);
     const router = useRouter();

     // Function to handle OTP input change
     const handleOtpChange = (index, value) => {
          // Check if value is a single digit number
          if (/^\d{0,1}$/.test(value)) {
               const newOtp = [...otp];
               newOtp[index] = value;
               setOtp(newOtp);

               // Move focus to the next input field if available
               if (index < otp.length - 1 && value !== '') {
                    inputRefs.current[index + 1].focus();
               }
          }
     };

     const handleKeyDown = (index, e) => {
          if (e.key === 'Backspace' || e.key === 'Delete') {
               const newOtp = [...otp];
               newOtp[index] = '';
               setOtp(newOtp);

               if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
                    inputRefs.current[index - 1].focus();
               }
          }
     };


     const handleResendOTP = async (e) => {
          e.preventDefault()
          setIsClicked(true)

          try {
               const response = await resendOTPEmail()
               if (response.success === true) {

                    Swal.fire({
                         title: response.message,
                         text: "Check your email",
                         icon: "success",
                         showConfirmButton: false,
                         timer: 2500
                    });

               } else if (response.success === false) {
                    Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: response.message,
                         showConfirmButton: false,
                         timer: 3000
                    });
               }
          } catch (error) {
               console.error('Error:', error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

               });
          }
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          setIsClicked(true);
          const formData = {
               otp: otp.join(''),
               email: email
          };
          try {
               const res = await fetch(`${apiUrl}/api/verify-otp`, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    cache: 'no-store',
               })

               const data = await res.json()

               if (data.success === true) {

                    Swal.fire({
                         title: data.message,
                         text: "Welcome to SaveDrive",
                         icon: "success",
                         showConfirmButton: false,
                         timer: 2000
                    });
                    setTimeout(() => {
                         router.replace('dash/enter-address');
                    }, 1000);
               } else if (data.success === false) {
                    Swal.fire({
                         icon: "error",
                         title: "Oops...",
                         text: data.message,
                         showConfirmButton: false,
                         timer: 3000
                    });
               }

          } catch (error) {
               console.error('Error:', error);
               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",

               });
          }
     };

     return (
          <>

               <div className=' ' style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
                    <div className='container h-100 ' style={{ minHeight: "100vh" }}>
                         <div className='row justify-content-center align-items-center h-100' style={{ minHeight: "100vh" }}>
                              <div className='' style={{ maxWidth: "600px" }}>
                                   <form className=' bg-white rounded-3 shadow-lg'>
                                        <div className='row text-center g-2 px-2 py-5'>

                                             <div className=' fs-4 fw-bold'>Verify OTP</div>
                                             <div className=' mb-30 '>Your code was sent to you via email</div>
                                             <div className='d-flex mt-10 mb-25' >

                                                  {otp.map((digit, index) => (
                                                       <div className=" mx-auto" style={{ maxWidth: '50px' }} key={index}>
                                                            <input
                                                                 type="text"
                                                                 className="w-100 fs-4 py-1 px-2 rounded-2 text-center"
                                                                 maxLength={1}
                                                                 value={digit}
                                                                 onChange={(e) => handleOtpChange(index, e.target.value)}
                                                                 onKeyDown={(e) => handleKeyDown(index, e)}
                                                                 ref={(input) => (inputRefs.current[index] = input)}
                                                            />
                                                       </div>
                                                  ))}
                                             </div>
                                             <div>
                                                  <button className=' rounded-2 py-2 px-3 border border-0 submitHover' style={{ backgroundColor: "#FFC000" }} onClick={handleSubmit}>Verify</button>
                                             </div>
                                             <div className='' style={{ fontSize: "14px" }}>
                                                  <span >{"Didn't receive code?"} </span> <span className=' ' style={{ color: "#fcc000", cursor: "pointer", }} onClick={handleResendOTP}>Resend</span>
                                             </div>
                                             <div></div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     );
}

export default InputOTP;