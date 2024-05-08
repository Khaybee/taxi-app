import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";
import SideProfile from "@/app/components/sideProfile";

const TaxiBrands = (props) => {
     return (
          <>
               <div className="  container-fluid bg-body-secondary h-100 mt-130 mb-130">
                    <div className="row bg-white pt-100 mx-4 mx-md-auto h-100 pb-100 rounded-4 justify-content-center">
                       
                              <div className="row w-100 text-center bg-body-tertiary py-5">
                                   <div className="col fw-bold fs-3">BRAND</div>
                                   <div className="col fw-bold fs-3">PRICE</div>
                                   <div className="col"></div>
                              </div>
                              <hr />

                   


                         <div className="row container-fluid mx-auto text-center align-items-center mt-60 mb-60">
                             
                              <div className="col fw-bold">  <img src="/images/team/team01.png" width="80px" className=" rounded-4 me-5 d-md-inline-block d-none" /> BOLT</div>
                              <div className="col fw-bold">5000</div>
                              <div className="col">
                                   <div
                                        className="fadeInRight animated w-50 text-center "
                                        data-animation="fadeInDown"
                                        data-delay=".2s"
                                   >
                                        <a href="/chooseOption" className="btn ss-btn smoth-scroll z-0 p-sm-3">
                                             FIND DRIVERS <i className="fal fa-long-arrow-up"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="row container-fluid mx-auto text-center align-items-center mt-60 mb-60">
                             
                              <div className="col fw-bold">  <img src="/images/team/team01.png" width="80px" className=" rounded-4 me-5 d-md-inline-block d-none" /> UBER</div>
                              <div className="col fw-bold">3500</div>
                              <div className="col">
                                   <div
                                        className="fadeInRight animated w-50 text-center "
                                        data-animation="fadeInDown"
                                        data-delay=".2s"
                                   >
                                        <a href="/chooseOption" className="btn ss-btn smoth-scroll z-0 p-sm-3">
                                             FIND DRIVERS <i className="fal fa-long-arrow-up"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="row container-fluid mx-auto text-center align-items-center mt-60 mb-60">
                             
                              <div className="col fw-bold">  <img src="/images/team/team01.png" width="80px" className=" rounded-4 me-5 d-md-inline-block d-none" /> LYFT</div>
                              <div className="col fw-bold">4800</div>
                              <div className="col">
                                   <div
                                        className="fadeInRight animated w-50 text-center "
                                        data-animation="fadeInDown"
                                        data-delay=".2s"
                                   >
                                        <a href="/chooseOption" className="btn ss-btn smoth-scroll z-0 p-sm-3">
                                             FIND DRIVERS <i className="fal fa-long-arrow-up"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="row container-fluid mx-auto text-center align-items-center mt-60 mb-60">
                             
                              <div className="col fw-bold">  <img src="/images/team/team01.png" width="80px" className=" rounded-4 me-5 d-md-inline-block d-none" /> RIDA</div>
                              <div className="col fw-bold">5500</div>
                              <div className="col">
                                   <div
                                        className="fadeInRight animated w-50 text-center "
                                        data-animation="fadeInDown"
                                        data-delay=".2s"
                                   >
                                        <a href="/chooseOption" className="btn ss-btn smoth-scroll z-0 p-sm-3">
                                             FIND DRIVERS <i className="fal fa-long-arrow-up"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                      
                      
                    </div>
               </div>
          </>
     );
};

export default TaxiBrands;
