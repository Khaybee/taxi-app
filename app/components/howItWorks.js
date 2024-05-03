"use client"
import Link from "next/link"
import '../styles/globals.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaSearch, FaTaxi, FaThumbsUp } from 'react-icons/fa';
import { FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import Image from "next/image"

const HowItWorks = () => {
  return (
    <>
      <section
        id="pricing"
        className="pricing-area pt-120 pb-60 fix p-relative"
        style={{
          backgroundImage: "url(/images/bg/price-bg.png)", // Corrected path for Next.js
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <div
                className="section-title text-center center-align mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h2>How It Works</h2>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-5 col-md-6">
              <div className="pricing-box  mb-60 hover-zoomin mb-30 wow fadeInUp animated"
              
              data-animation="fadeInUp"
              data-delay=".4s">
                <div className="pricing-head">
                  <h3>
                    {/* <Image src="/images/icon/check-mark.png" alt="about Image" width={65} height={65} style={{ width: "20%", height: "20%" }} /> */}
                    <FaMapMarkerAlt size={50} className="text-warning mb-3" />
                  </h3>
                  <div className="price-count">
                    <h2>Enter Your Pickup and Destination Addresses</h2>
                  </div>
                  <p className=" fw-medium mt-25">
                    Simply input where you want to be picked up and your final destination.
                  </p>
                </div>

              </div>
            </div>

            <div className="text-center text-white align-self-center col-lg-1 d-none d-lg-block">
              <FaArrowRight size={50} />
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="pricing-box active mb-60">
                <div className="pricing-head">
                  <h3>
                    <img
                      src="/images/icon/pricning-icon-02.png"
                      alt="icon02"
                    />
                  </h3>
                  <div className="price-count">
                    <h2>Compare Rides</h2>
                  </div>
                  <p className=" fw-medium mt-25">
                  We instantly provide a list of taxi options from various platforms, complete with prices, estimated times, and other important details.
                  </p>
                </div>
          </div>
            </div>

          </div>
          <div className=" mb-25">
             <div className=" col-lg-8 col-md-0  text-right text-white align-self-end w-75">
              <FaArrowDown size={50} />
            </div>
          </div>

          <div className="row text-center">
            

            <div className="col-lg-5 col-md-6">
              <div className="pricing-box  active mb-60">
                <div className="pricing-head">
                  <h3>
                   
                    <FaThumbsUp size={50} className=" text-black mb-3" />
                  </h3>
                  <div className="price-count">
                  
                    <h2>Enjoy Your Trip</h2>
                  </div>
                  <p className=" fw-medium mt-25">
                  Sit back, relax, and enjoy your journey. If you need any assistance, our customer support team is always here to help.
                  </p>
                </div>


           
              </div>
            </div>

            <div className="text-center text-white align-self-center col-lg-1 d-none d-lg-block">
              <FaArrowLeft size={50} />
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="pricing-box mb-60 ">
                <div className="pricing-head">
                  <h3>
                    <Image src="/images/icon/check-mark.png" alt="about Image" width={65} height={65} style={{ width: "20%", height: "20%" }} />
                  </h3>
                  <div className="price-count mt-15">
                    <h3>Book Your Ride</h3>
                  </div>
                  <p className=" fw-medium mt-25">
                  Choose the best option for you and book your ride with just a few clicks. We'll handle the rest.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      
      
        {/* <section
          id="pricing"
          className="pricing-area pt-120 pb-60 fix p-relative"
          style={{
            backgroundImage: "url(/images/bg/price-bg.png)", // Corrected path for Next.js
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
<Container className="my-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <Row className="text-center">
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <FaMapMarkerAlt size={50} className="text-primary mb-3" />
              <Card.Title>Enter Pickup & Destination</Card.Title>
              <Card.Text>
                Provide your pickup location and your desired destination. Our platform will do the rest.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <FaSearch size={50} className="text-success mb-3" />
              <Card.Title>Compare Rides</Card.Title>
              <Card.Text>
                Instantly get a list of taxi options from multiple ride-hailing platforms. Compare prices, times, and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <FaTaxi size={50} className="text-warning mb-3" />
              <Card.Title>Book Your Ride</Card.Title>
              <Card.Text>
                Choose the ride that suits you best and book it directly from our platform. It's quick and easy.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <FaThumbsUp size={50} className="text-info mb-3" />
              <Card.Title>Enjoy Your Trip</Card.Title>
              <Card.Text>
                Sit back, relax, and enjoy the ride. Our support team is available for any assistance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

        </section> */}


    </>
  )
}

export default HowItWorks;