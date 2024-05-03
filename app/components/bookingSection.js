"use client"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"

const BookingSection = () => {
    return (
        <>
                  <div
          className="counter-area p-relative pt-120 pb-180"
          style={{
            backgroundImage: "url(/images/bg/coutner-bg.png)",
            backgroundSize: "cover",
          }}
        >
          {/* <div className="container"> */}
          <div className="contain">
            <div className="row p-relative mb-120 align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="search-img wow fadeInLeft animated"
                  data-animation="fadeInLeft"
                  data-delay=".4s"
                >
                  {/* <img src="img/bg/search-img.png" alt="search image" /> */}
                  <Image src="/images/bg/search-img.png" alt="search Image" width={1000} height={1000} style={{width: "100%", height: "100%"}} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="search-form-bg wow fadeInRight animated"
                  data-animation="fadeInRight"
                  data-delay=".4s"
                >
                  <form className="contact-form">
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="section-title center-align mb-30">
                          <h2>Find Your Car Here!</h2>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-name mb-30">
                          <select name="year" id="adu2">
                            <option value="sports-massage">Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-name mb-30">
                          <select name="engine" id="cld">
                            <option value="sports-massage">Engine</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="contact-field p-relative c-name mb-30">
                          <select name="model" id="rm2">
                            <option value="sports-massage">Model</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="slider-btn mb-20">
                          <button
                            className="btn ss-btn"
                            data-animation="fadeInRight"
                            data-delay=".8s"
                          >
                            Search{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="container count-bdr">
            <div className="row p-relative">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="counter p-relative">
                    <div className="icon">
                      <img
                        src="img/icon/count-icon-01.png"
                        alt="counter icon"
                      />
                    </div>
                    <span className="count">200</span>
                    <span>+</span>
                    <p>KM Driven</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="counter p-relative">
                    <div className="icon">
                      <img
                        src="img/icon/count-icon-02.png"
                        alt="counter icon"
                      />
                    </div>
                    <span className="count">20</span>
                    <span>+</span>
                    <p>People Dropped</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="counter p-relative">
                    <div className="icon">
                      <img
                        src="img/icon/count-icon-03.png"
                        alt="counter icon"
                      />
                    </div>
                    <span className="count">10</span>
                    <span>k+</span>
                    <p>Taxi And Drivers</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="counter p-relative">
                    <div class="icon">
                      <img
                        src="img/icon/count-icon-04.png"
                        alt="counter icon"
                      />
                    </div>
                    <span className="count">900</span>
                    <span>+</span>
                    <p>Client Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking area */}

        <section className="booking pb-120 p-relative">
          {/* <div className="container"> */}
          <div className="contain">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="section-title mt-50 mb-35 wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <h5>Rent A Car</h5>
                  <h2 className="">Get the keys to your adventure Rent</h2>
                </div>
                <ul className="pr-20">
                  <li>
                    <div
                      className="booking-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img src="img/icon/fea-icon01.png" alt="icon" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Quick Ride</h3>
                        <p>
                          Aliquam eros justo, posuere in lobortis no viverra.
                          Aliquam eros justo, posuere in lobortis no viverra.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="booking-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img src="img/icon/fea-icon02.png" alt="icon" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Swift Cab</h3>
                        <p>
                          Aliquam eros justo, posuere in lobortis no viverra.
                          Aliquam eros justo, posuere in lobortis no viverra.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="contact-bg02">
                  <div className="section-title center-align">
                    <p>
                      Taxi service refers to the transportation of passengers
                      from one location to another using a hired vehicle.
                    </p>
                  </div>
                  <form
                    action="https://htmldemo.zcubethemes.com/citylink/mail.php"
                    method="post"
                    className="contact-form mt-30"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-20">
                          <strong>First Name</strong>
                          <label>
                            <i className="fal fa-user" />
                          </label>
                          <input
                            type="text"
                            id="firstn"
                            name="firstn"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-20">
                          <strong>Email</strong>
                          <label>
                            <i className="fal fa-envelope-open" />
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="info@"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="contact-field p-relative c-option mb-20">
                          <strong>Pickup Date</strong>
                          <input
                            type="date"
                            id="pikup"
                            name="pikup"
                            placeholder="Pickup Date"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12">
                        <div className="contact-field p-relative c-option mb-20">
                          <strong>Dropup Date</strong>
                          <input
                            type="date"
                            id="dropup"
                            name="dropup"
                            placeholder="Dropup Date"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="contact-field p-relative c-subject mb-20">
                          <strong>Person</strong>
                          <label>
                            <i className="fal fa-users" />
                          </label>
                          <select name="adults" id="adu2">
                            <option value="sports-massage">Person</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="slider-btn mt-15">
                          <button
                            className="btn ss-btn"
                            data-animation="fadeInRight"
                            data-delay=".8s"
                          >
                            <span>Book Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default BookingSection;