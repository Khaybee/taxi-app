"use client"
import Link from "next/link"
import '../styles/globals.css'
import '../styles/default.css'
import Image from "next/image"

const CallToAction = () => {
    return (
        <>
           <section
      className="cta-area cta-bg pt-60 pb-60"
      style={{
        backgroundImage: 'url(/images/bg/cta-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="section-title cta-title wow fadeInLeft animated"
              data-animation="fadeInDown"
              data-delay=".2s"
            >
              <h2>Ready to Find Your Ride?</h2>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div
              className="cta-btn s-cta-btn wow fadeInRight animated"
              data-animation="fadeInDown"
              data-delay=".2s"
            >
              <a href="about.html" className="btn ss-btn smoth-scroll">
              Get Started Now <i className="fal fa-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default CallToAction;