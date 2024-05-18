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

const Services = () => {
  return (
    <>
      <Header />
      <Banner
        name="Our Services"
        description="At SaveDrive, we offer a range of services designed to make booking a taxi easier and more efficient. 
        Whether you're planning a quick trip across town or a longer journey, our platform has you covered."
        image="url(images/banner/yellow-sportCar.jpg)"
      />

      {/*  */}

      <div className="  bg-body-secondary rounded-1">
      <div class="container col-xxl-10 px-4 pt-5 pb-3">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src="/images/icon/ridesharing-apps.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="900"
              height="900"
              loading="lazy"
            />
          </div>
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Ride Comparison
            </h1>
            <p className="lead text-black " style={{fontSize: "20px"}}>
              Our core service is the ability to compare different taxi-hailing
              services in real time. By entering your pickup and destination
              addresses, you can instantly see a list of available rides from
              various platforms. This includes important details like price,
              estimated time of arrival, and driver information. With our
              comparison tool, you can choose the best ride that suits your
              budget and schedule.
            </p>
          </div>
        </div>
      </div>
      </div>

      <div class="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-7 ">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Direct Booking
            </h1>
            <p className="lead text-black" style={{fontSize: "20px"}}>
              {"Once you've found the ideal ride, you can book it directly through our platform. No need to switch apps or websites—everything is done in one place. Our seamless booking process ensures you can secure your ride quickly and conveniently."}
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src="/images/icon/direct-booking.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      

      {/*  */}

      <div class="bg-dark text-secondary px-4 py-5 mb-145 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">Experience Our Services</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Ready to explore the best taxi-hailing services in your area?
              Start by entering your pickup and destination addresses, and let
              us do the rest. With SaveDrive, finding and booking a ride has
              never been easier.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-5 me-sm-3 fs-4 fw-bold"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
