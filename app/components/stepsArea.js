"use client"
import Link from "next/link"
import '../styles/globals.css'
import Image from "next/image"

const StepSection = () => {
    return (
        <>
           <section className="steps-area p-relative pt-120 pb-120">
          <div className="contain">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-7">
                <div
                  className="section-title text-center mb-50 wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <h5>Work Process</h5>
                  <h2>What Our Users Say</h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              {/* Step 1 */}
              <div className="col-lg-4 col-md-12">
                <div
                  className="step-box wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="step-box-text-one">
                    <div className="icon">
                      <img src="img/icon/setp-01.png" alt="class image" />
                    </div>
                    <div className="line">
                      <hr />
                    </div>
                    <div className="number">01</div>
                  </div>
                  <div className="step-box-text-two">
                    <h3>Panel Installation</h3>
                    <p>
                      Ut elementum et mollis eu sapien neque then tempus.
                      Tristique nisl nibh tincidunt proin sit dowm dkeleu.
                    </p>
                    <a href="contact.html" className="btn ss-btn">
                      Read More{" "}
                      <i className="fa-sharp fa-light fa-arrow-up"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-lg-4 col-md-12">
                <div
                  className="step-box wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="step-box-text-one">
                    <div className="icon">
                      <img src="img/icon/setp-02.png" alt="class image" />
                    </div>
                    <div className="line">
                      <hr />
                    </div>
                    <div className="number">02</div>
                  </div>
                  <div className="step-box-text-two">
                    <h3>Thermal System</h3>
                    <p>
                      Ut elementum et mollis eu sapien neque then tempus.
                      Tristique nisl nibh tincidunt proin sit dowm dkeleu.
                    </p>
                    <a href="contact.html" className="btn ss-btn">
                      Read More{" "}
                      <i className="fa-sharp fa-light fa-arrow-up"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-lg-4 col-md-12">
                <div
                  className="step-box wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="step-box-text-one">
                    <div className="icon">
                      <img src="img/icon/setp-03.png" alt="class image" />
                    </div>
                    <div className="line">
                      <hr />
                    </div>
                    <div className="number">03</div>
                  </div>
                  <div className="step-box-text-two">
                    <h3>Panel Installation</h3>
                    <p>
                      Ut elementum et mollis eu sapien neque then tempus.
                      Tristique nisl nibh tincidunt proin sit dowm dkeleu.
                    </p>
                    <a href="contact.html" className="btn ss-btn">
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

export default StepSection;