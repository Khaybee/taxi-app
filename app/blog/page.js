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

const Blog = () => {
     return (
          <>
               <Header />
               <Banner name="Latest Blogs" description="Enter your destination and pickup address to get a list of
                      the most affordable taxi services from various
                      ride-hailing platforms. Compare prices, estimated arrival
                      times, and more. Booking a taxi has never been easier!" image="url(images/banner/yellow-sportCar.jpg)" />

               {/*  */}

               <div class="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                         <div className="col-10 col-sm-8 col-lg-6">
                              <img src="/images/bg/faq-img.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                         </div>
                         <div className="col-lg-6">
                              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About SaveDrive</h1>
                              <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                   <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                   <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                              </div>
                         </div>
                    </div>
               </div>

               <Footer />

          </>
     )

}

export default Blog;
