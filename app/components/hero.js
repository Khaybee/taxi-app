"use client";
import Link from "next/link";
import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

const Hero = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="body">
      <section id="home" className="slider-area fix p-relative">
        <div className="slider-active" style={{ background: "#141b22" }}>
          <div
            className="single-slider slider-bg d-flex align-items-center slick-slide slick-current slick-active"
            style={{
              backgroundImage: "url(images/slider/slider_bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              position: "relative",
              left: "0px",
              top: "0px",
              zIndex: 999,
              opacity: 1,
            }}
          >
            {/* <div className="container"> */}
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="slider-content mt-120">
                    <h5
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ animationDelay: "0.4s" }}
                    >
                      Find the Best Taxi Rides Near You
                    </h5>
                    <h2
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ animationDelay: "0.4s" }}
                    >
                      Find reliable and affordable taxi <span>rides.</span>
                    </h2>
                    <p
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      style={{ animationDelay: "0.6s" }}
                    >
                      Enter your destination and pickup address to get a list of
                      the most affordable taxi services from various
                      ride-hailing platforms. Compare prices, estimated arrival
                      times, and more. Booking a taxi has never been easier!
                    </p>
                    <div className="slider-btn mt-30">
                      <Link
                        href="/auth"
                        className="btn ss-btn mr-15 fs-4"
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                        style={{ animationDelay: "0.4s" }}
                      >
                        Get Started{" "}
                        <i className="fa-sharp fa-light fa-arrow-up"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 p-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Hero;
