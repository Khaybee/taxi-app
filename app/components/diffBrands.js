"use client"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"

const BrandsSection = () => {
    return (
        <>
           <section className="courses pt-120 pb-120 p-relative fix mt-130 mb-130">
          {/* <div className="container"> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="section-title center-align mb-20 wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                 
                  <h2>Choose your Best Deal</h2>
                </div>
                <p
                  className="wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  Taxi service refers to the transportation of passengers from
                  one location to another using a hired vehicle. It offers a
                  convenient way to travel.
                </p>
              </div>


              
              <div className="col-lg-8">
                <div className="row justify-content-center align-items-center car-active">
                  {/* First Car */}
                  <div className="col-lg-3 col-md-6 col-sm-12" 
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div className="icon">
                          {/* <img src="img/bg/car-img-01.png" alt="icon01" /> */}
                          <Image
                            src="/images/bg/car-img-01.png"
                            alt="icon01"
                            width={1000}
                            height={1000}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="text">
                          <h3>Toyota Camry (1982)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                {/* <img src="img/bg/car-star.png" alt="icon01" /> */}
                                <Image
                                  src="/images/bg/car-star.png"
                                  alt="icon01"
                                  width={1000}
                                  height={1000}
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" 
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div className="icon">
                          {/* <img src="img/bg/car-img-01.png" alt="icon01" /> */}
                          <Image
                            src="/images/bg/car-img-01.png"
                            alt="icon01"
                            width={1000}
                            height={1000}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="text">
                          <h3>Toyota Camry (1982)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                {/* <img src="img/bg/car-star.png" alt="icon01" /> */}
                                <Image
                                  src="/images/bg/car-star.png"
                                  alt="icon01"
                                  width={1000}
                                  height={1000}
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12" 
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div className="icon">
                          {/* <img src="img/bg/car-img-01.png" alt="icon01" /> */}
                          <Image
                            src="/images/bg/car-img-01.png"
                            alt="icon01"
                            width={1000}
                            height={1000}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="text">
                          <h3>Toyota Camry (1982)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                {/* <img src="img/bg/car-star.png" alt="icon01" /> */}
                                <Image
                                  src="/images/bg/car-star.png"
                                  alt="icon01"
                                  width={1000}
                                  height={1000}
                                  style={{ width: "100%", height: "100%" }}
                                />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
               

                  {/* Second Car */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-12"
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div className="icon">
                          <img src="img/bg/car-img-02.png" alt="icon01" />
                        </div>
                        <div className="text">
                          <h3>Ford Mustang (1964)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                <img src="img/bg/car-star.png" alt="icon01" />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Third Car */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-12"
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div className="icon">
                          <img src="img/bg/car-img-03.png" alt="icon01" />
                        </div>
                        <div className="text">
                          <h3>Mercedes S Class (1972)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                <img src="img/bg/car-star.png" alt="icon01" />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* Fourth Car */}
                  {/* <div className="col-lg-3 col-md-6 col-sm-12"
                  tabIndex={0}
                  style={{ width: '322px' }}
                  data-slick-index="1"
                  aria-hidden="false"
                  >
                    <div
                      className="services-box mb-30 wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="sr-contner">
                        <div class="icon">
                          <img src="img/bg/car-img-04.png" alt="icon01" />
                        </div>
                        <div className="text">
                          <h3>BMW 3 Series (1975)</h3>
                          <ul>
                            <li>
                              <span>Base Rate:</span> $10
                            </li>
                            <li>
                              <span>Per Mile/KM:</span> $20
                            </li>
                            <li>
                              <span>Passengers:</span> 6
                            </li>
                            <li>
                              <span>Rating:</span>
                              <strong>
                                <img src="img/bg/car-star.png" alt="icon01" />
                              </strong>
                            </li>
                          </ul>
                          <a
                            href="single-service.html"
                            className="readmore btn"
                          >
                            Book Now{" "}
                            <i className="fa-sharp fa-light fa-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default BrandsSection;