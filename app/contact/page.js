"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import "../styles/default.css";
import Header from "../components/header";
import Hero from "../components/hero";
import Banner from "../components/banner";
import AboutUs from "../components/aboutUs";
import Footer from "../components/footer";
import { toast } from "react-toastify";

const Contact = () => { 

  const sendMessage= () => {
    toast.success("Message sent")
  }
  return (
    <>
      <Header />
      <Banner
        name="Contact Us"
        description="Enter your destination and pickup address to get a list of
                      the most affordable taxi services from various
                      ride-hailing platforms. Compare prices, estimated arrival
                      times, and more. Booking a taxi has never been easier!"
        image="url(images/banner/yellow-sportCar.jpg)"
      />
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Leave Us a Message
            </h1>
            <p className="col-lg-12 fs-5">
             {" We'd love to hear from you! If you have questions, suggestions, or just want to say hello, feel free to reach out. You can contact us via email or phone, on social media or simply type a message over here. We're here to help and look forward to hearing from you."}
            </p>
      <div className=" mt-4">
        
      <a href="#">
                    <i className="fab fa-facebook-f fs-1 me-5"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram fs-1 me-5"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter fs-1 me-5"></i>
                  </a>
                  <a href="#">
                    <i className="fal fa-envelope fs-1 me-5"></i>
                  </a>
                  <a href="#">
                    <i className="fal fa-phone fs-1 me-5"></i>
                  </a>
      
      </div>
            
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className=" p-3 w-100 fs-5"
                  id="floatingInput"
                  placeholder="Email address"
                />
                <label for="floatingInput"></label>
              </div>
              <div className="form-floating mb-3">
                
                <textarea
                  textarea
                  id="w3review"
                  name="message"
                  rows="10"
                  cols="36"
                  className=" p-3 w-100 fs-5" placeholder="Write message"
                  
                >
                
                </textarea>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary mt-10"
                type="button"
                onClick={sendMessage}
              >
                SEND
              </button>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
