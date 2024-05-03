"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

const SecondSection = () => {
  return (
    <>
      <section className="about-area about-p pt-60 pb-60 p-relative fix">
        <div className="contain">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content  pr-80 wow fadeInRight  "
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title  pb-25">
                  <h2 className="">Your Satisfaction, Our Priority</h2>
                </div>
                <h6 className="fs-5 fw-normal">
                At <b>SaveDrive</b>, we are committed to providing you with the
                  best possible experience. Our mission is to simplify your
                  journey, ensuring convenience, affordability, and reliability
                  every step of the way.
                </h6>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="skills-content s-about-content mt-20">
                      <div className="skills">
                        <div className="skill mb-30">
                          <div className="skill-name">Time Awareness</div>
                          <div className="skill-bar">
                            <div
                              className="skill-per"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="skill mb-30">
                          <div className="skill-name">Driver Experience</div>
                          <div className="skill-bar">
                            <div
                              className="skill-per"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="skill mb-30">
                          <div className="skill-name">Transparent Pricing</div>
                          <div className="skill-bar">
                            <div
                              className="skill-per"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="skill mb-30">
                          <div className="skill-name">24/7 Support</div>
                          <div className="skill-bar">
                            <div
                              className="skill-per"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center mt-20">
                  <div className="col-lg-4 col-xs-4">
                    <div className="slider-btn">
                      <Link href="/about" className="btn ss-btn smoth-scroll">
                        Read More{" "}
                        <i className="fa-sharp fa-light fa-arrow-up"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xs-8">
                    <div className="call-box">
                      <div className="icon">
                        <i className="fa-regular fa-phone"></i>
                      </div>
                      <div className="text">
                        <span>Requesting A Call:</span>
                        <strong>
                          <a href="/tel:+917052101786">(629) 555-0129</a>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative wow fadeInLeft"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <div className="ab-img">
                  <Image
                    src="/images/features/about_img_02.png"
                    alt="about Image"
                    width={1000}
                    height={1000}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="about-text second-about">
                  <div className="icon">
                    <Image
                      src="/images/icon/taxi-icon.png"
                      alt="Taxi Icon"
                      width={1000}
                      height={1000}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="text">
                    <span>2+</span>
                    <p>Years of Assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
