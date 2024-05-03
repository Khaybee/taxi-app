"use client"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"

const BlogSection = () => {
    return (
        <>
     <section id="blog" className="blog-area p-relative fix pt-120 pb-90">
          <div className="contain">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8">
                <div
                  className="section-title center-align mb-50 text-center wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <h5>Testimonials</h5>
                  <h2>What Our Users Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div
                  className="single-post3 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb3">
                    <a href="blog-details.html">
                      <img src="images/blog/inner_b1.jpg" alt="blog image" />
                    </a>
                  </div>
                  <div className="blog-content3">
                    <div className="date-home">
                      <ul>
                        <li>
                          <i className="fal fa-user"></i> By admin
                        </li>
                        <li>
                          <i className="fal fa-calendar-alt"></i> July 21, 2023
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="blog-details.html">
                        Quick and Easy Ride with Transportation
                      </a>
                    </h4>
                    <p>
                      There are many variations of the passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                    <a href="blog-details.html" className="readlink">
                      Read More{" "}
                      <i className="fa-sharp fa-light fa-arrow-up"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div
                  className="single-post3 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb3">
                    <a href="blog-details.html">
                      <img src="images/blog/inner_b3.jpg" alt="blog image" />
                    </a>
                  </div>
                  <div className="blog-content3">
                    <div className="date-home">
                      <ul>
                        <li>
                          <i className="fal fa-user"></i> By admin
                        </li>
                        <li>
                          <i className="fal fa-calendar-alt"></i> July 21, 2023
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="blog-details.html">
                        It offers a convenient and reliable mode of transport
                      </a>
                    </h4>
                    <p>
                      There are many variations of the passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                    <a href="blog-details.html" className="readlink">
                      Read More{" "}
                      <i className="fa-sharp fa-light fa-arrow-up"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default BlogSection;