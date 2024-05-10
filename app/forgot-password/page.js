import Link from "next/link";
import LoggedInNav from "../components/loggedInNav";
import "../styles/input-address.css"



const Carousel = (props) => {

     return (
          <>
               <LoggedInNav />

               <div className=" "  style={{height: '100dvh'}}>
                    <div className=" bg-body-secondary px-5 w-100 " style={{height: '260px'}}>
                        <div className=" container">
                      <div className=" row py-5  ">
                      <div className="">Things on top</div>
                         <form className=" shadow-lg p-3 bg-white row rounded-3 container  ">
                              <div className="col-4 ms-1 border-end ">
                                   <label className="row fs-4">From</label>
                                   <input className=" py-2 row border-0 fs-4" placeholder=""/> 
                              </div>
                              <div className="col-4 ms-1 ">
                                   <label className="row fs-4">To</label>
                                   <input className=" py-2 row border-0 fs-4" placeholder=""/> 
                              </div>
                              <div className="col-3 text-center align-content-center"
                              data-delay=".2s"> 
                              <div className="btn ss-btn smoth-scroll z-0">
                                        Get Options <i className="fal fa-long-arrow-up"></i>
                                   </div>
                                   {/* <div className="rounded-5 border s-cta-btn wow fadeInRight animated text-center h-100 btn fs-5 "
                              data-animation="fadeInRight "
                              data-delay=".2s">
                                        click
                                   </div>               */}
                              </div>
                         </form>
                      </div>
                        </div>
                    </div>
               </div>
          </>
     );
};

export default Carousel;







{/* <div id="myCarousel" class="carousel slide mb-6 pointer-event" style={{height: '30dvh'}} data-bs-ride="carousel">
                    <div class="carousel-indicators">
                         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
                         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
                    </div>
                    <div class="carousel-inner">
                         <div class="carousel-item" style={{height: '50dvh'}}>
                              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                              <div class="container">
                                   <div class="carousel-caption text-start">
                                        <h1>Example headline.</h1>
                                        <p class="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                                   </div>
                              </div>
                         </div>
                         <div class="carousel-item active carousel-item-start">
                              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                              <div class="container">
                                   <div class="carousel-caption">
                                        <h1>Another example headline.</h1>
                                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
                                   </div>
                              </div>
                         </div>
                         <div class="carousel-item carousel-item-next carousel-item-start">
                              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                              <div class="container">
                                   <div class="carousel-caption text-end">
                                        <h1>One more for good measure.</h1>
                                        <p>Some representative placeholder content for the third slide of this carousel.</p>
                                        <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                    </button>
               </div> */}