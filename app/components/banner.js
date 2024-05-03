"use client"
import Link from "next/link"

const Banner = props => {
    return (
        <>
            {/* <div className="" style={{ backgroundImage: "url(images/background/bg2.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>{props.name} Page</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/"> Home</Link></li>
                                <li className="breadcrumb-item">{props.name}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> */}

<div className="body">
      <section id="home" className="slider-area fix p-relative">
        <div className="slider-active" style={{ background: "#141b22" }}>
          <div
            className="slider-bg h-75 d-flex align-items-center "
            style={{
              backgroundImage: `${props.image}`,
              // backgroundImage: "url(images/banner/yellow-sportCar.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              position: "relative",
              left: "0px",
              top: "0px",
              zIndex: 999,
              opacity: 1,
              // filter: 'blur(4px)'
            }}
          >
            {/* <div className="container"> */}
            <div className="contain ">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 w-75 col-md-12">
                  <div className="slider-content mt-120 text-center">
                    <h2 
                      data-animation="fadeInUp"
                      data-delay=".4s"
                      style={{ animationDelay: "0.4s", fontSize: "95px" }} className=""
                    >
                     {props.name}
                    </h2>
                    <p
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      style={{ animationDelay: "0.6s" }}
                    >
                      {props.description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 p-relative"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
        </>
    )
}

export default Banner