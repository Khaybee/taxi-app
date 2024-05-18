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
import Image from "next/image";

const About = () => {
  return (
    <>
      <Header />
      <Banner
        name="About Us"
        description="Enter your destination and pickup address to get a list of
                      the most affordable taxi services from various
                      ride-hailing platforms. Compare prices, estimated arrival
                      times, and more. Booking a taxi has never been easier!"
        image="url(images/banner/yellow-sportCar.jpg)"
      />

      {/*  */}

      <div class="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/images/bg/faq-img.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our Story
            </h1>
            <p className="fs-5">
              SaveDrive began with a simple idea: to make finding and booking
              taxis easier and more affordable for everyone. Our founders, a
              group of tech enthusiasts and transportation experts, saw the need
              for a unified platform where users could compare different
              taxi-hailing services in one place. With this vision in mind, they
              set out to create a solution that would transform the way people
              book rides.
            </p>
          </div>
        </div>
      </div>

      <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom meetTeam">Meet The Team</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis ">Our Team</h2>
            <p class="text-body-secondary fs-5">
              {"Our team is a diverse group of professionals with backgrounds in technology, transportation, customer service, and more. We're united by a passion for making transportation easier and moreaccessible. Our collaborative approach and commitment to excellence drive us to deliver outstanding results."}
            </p>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-5">
              <div class="col d-flex flex-column gap-2">
                <Image
                  src="/images/team/about1.jpg"
                  className=" rounded-5"
                  alt="search Image"
                  width={1000}
                  height={1000}
                  style={{ width: "", height: "100%" }}
                />
              </div>

              <div class="col d-flex flex-column gap-2">
                <Image
                  src="/images/team/about2.jpg"
                  className=" rounded-5"
                  alt="search Image"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div class="col d-flex flex-column gap-2">
                <Image
                  src="/images/team/about3.jpg"
                  className=" rounded-5"
                  alt="search Image"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div class="col d-flex flex-column gap-2">
                <Image
                  src="/images/team/about4.jpg"
                  className=" rounded-5"
                  alt="search Image"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
