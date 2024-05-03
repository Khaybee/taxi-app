"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

const AboutUs = (props) => {
  return (
    <>
      {/* About Area */}

      
      <section
        id="pricing"
        className="pricing-area pt-145 pb-145 fix p-relative"
      >
        <div className="contain">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <div
                className="section-title text-center center-align mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h2 className=" text-black">Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-stretch flex-wrap">
            <div className="col-lg-3 col-md-6 text-center  ">
              <div className="pricing-box mb-60">
                <div className="pricing-head">
                  <h3>
                    <img src="/images/icon/pricning-icon-01.png" alt="icon01" />{" "}
                  
                  </h3>
                  <div className="price-count mb-3">
                    <h2 className=" text-black">Comprehensive Comparison</h2>
                  </div>
                  <p className="text-black fs-6 fw-normal">
                    We bring together data from multiple taxi-hailing services,
                    allowing you to choose the best ride based on price,
                    estimated arrival time, and driver details.
                  </p>
                </div>

                
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center  ">
              <div className="pricing-box mb-60">
                <div className="pricing-head">
                  <h3>
                  <img
                        src="/images/icon/pricning-icon-03.png"
                        alt="icon03"
                      />{" "}
                  
                  </h3>
                  <div className="price-count mb-5">
                    <h2 className=" text-black">Easy Booking</h2>
                  </div>
                  <p className="text-black fs-6 fw-normal">
                  Book your ride directly from our platform without switching between different apps or websites.
                  </p>
                </div>

              
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center  ">
              <div className="pricing-box mb-60">
                <div className="pricing-head">
                  <h3>
                  <img
                        src="/images/icon/pricning-icon-03.png"
                        alt="icon03"
                      />{" "}
                  
                  </h3>
                  <div className="price-count mb-5">
                    <h2 className=" text-black">Real-time Updates</h2>
                  </div>
                  <p className="text-black fs-6 fw-normal">
                  Get real-time information on taxi availability, driver details, and estimated arrival times to make the most informed choice.
                  </p>
                </div>

            
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center  ">
              <div className="pricing-box mb-60">
                <div className="pricing-head">
                  <h3>
                    <img src="/images/icon/pricning-icon-01.png" alt="icon01" />{" "}
                  
                  </h3>
                  <div className="price-count mb-3">
                    <h2 className=" text-black">Secure and Reliable</h2>
                  </div>
                  <p className="text-black fs-6 fw-normal">
                  We prioritize your safety and privacy. All bookings are secured, and your information is protected.
                  </p>
                </div>

           
              </div>
            </div>
          

           
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
