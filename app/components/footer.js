"use client"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"
import NewsLetter from "./newsletter"

const Footer = () => {
    return (
        <>
               <footer
        className="footer-bg footer-p pt-90"
        style={{
          backgroundColor: "#111",
          backgroundImage: "url(images/bg/footer-bg.png)",
        }}
      >
        <div className="footer-top-heiding">
          <div className="contain">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="f-logo">
                  <img src="images/logo/SaveDrive_logo.jpg" alt="footer logo" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-right">
                <div className="footer-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top pb-70">
          <div className="contain">
            <div className="row justify-content-between">
              {/* <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>About Us</h2>
                  </div>
                  <div className="footer-link">
                    <p>
                      Mauris non nisi semper, lacinia neque in, dapibus leo.
                      Curabitur sagittis libero tincidunt tempor finibus. Mauris
                      at dignissim ligula, nec tristique orci.
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="col-xl-1 col-lg-2 col-sm-6 mb-sm-5">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Explore</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="service.html">Latest Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-1 col-lg-2 col-sm-6 mb-sm-5">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Follow Us</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">LinkedIn</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="f-contact">
                    <ul>
                      <li>
                        <i className="icon fal fa-phone"></i>
                        <span>
                          <a href="tel:+14440008888">+234 (901) 234-8888</a>
                          <br />
                          <a href="tel:+917052101786">0907 052 1017</a>
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-envelope"></i>
                        <span>
                          <a href="mailto:info@example.com">david@gmail.com</a>
                          <br />
                          <a href="mailto:help@example.com">saveDrive@mail.com</a>
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-map-marker-check"></i>
                        <span>
                          1247/Plot No. 39, 15th Phase,
                          <br />
                          Gudu, Abuja
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Subscribe to Our Newsletter</h2>
                  </div>
                 <NewsLetter />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrap">
          <div className="contain">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="copy-text">
                  Copyright &copy; 2024 Citylink. All rights reserved.
                </div>
              </div>
              <div className="col-lg-8 col-md-8 text-right">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms Of Service</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;