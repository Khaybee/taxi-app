"use client";
import { useEffect, useState } from "react";
import Map from "./map";

export default function BookedRide() {
     return (
          <>

               {/* <div className=" bg-body-tertiary" style={{ height: '100%' }}> */}
               <div className=" container w-100 ">
                    <div className=" row  mb-100">
                         <div className=" bg-white shadow-lg col-lg-8 rounded-3 px-0">
                              <div>
                                   <Map />
                              </div>
                              <div className=" row mt-20 p-5" >
                                   <div className=" col-lg-3"><img src="/images/team/team01.png" width="100%" className=" rounded-4" /></div>
                                   <div className=" col-lg-9">
                                        <div className=" row " style={{ height: "100%" }}>
                                             <div className=" col-lg-6">
                                                  <div className=" d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                                       <div>
                                                            <div className=" fs-4 fw-medium">Obafe Jeremiah</div>
                                                            <div style={{ letterSpacing: "2px" }}>Toyota Camry  <i className="fa fa-car"></i></div>
                                                            <div style={{ letterSpacing: "1px" }}>ABJ-12346</div>
                                                       </div>


                                                       <div style={{ fontSize: "15px" }}><span>from Bolt,</span><span className=" ms-2">Male</span></div>
                                                  </div>
                                             </div>
                                             <div className=" col-lg-6">
                                                  <div className=" d-flex flex-column justify-content-between align-items-end" style={{ height: "100%" }}>
                                                       <div>
                                                            <div className=" pt-5" style={{ fontSize: "14px" }}> <i className="fa fa-phone me-1"></i><a href="tel:+9034564322">09034564322</a></div>
                                                       </div>


                                                       <div style={{ fontSize: "15px" }}><div className="btn ss-btn smoth-scroll z-0 px-2 py-3" style={{ fontSize: "14px" }}>
                                                            Cancel ride
                                                       </div></div>
                                                  </div>


                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                         <div className=" bg-white shadow-lg col-lg-3 ms-5 col-sm-12 mt-lg-4 " style={{ maxHeight: "500px" }}>
                              <div className=" p-2 ">
                                   <div className=" text-center">
                                   <h3>Payment Method</h3>
                                   <p>Select a payment method</p>
                                   </div>
                                   
                                   <div className="row justify-content-left ms-3 fs-3 ">
                                   <div className="form-check mb-10">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithCash" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCash">Pay with Cash</label>
                                             {/* <span className="icon" aria-hidden="true">&#xf08b;</span> */}
                                        </div>
                                        <div className="form-check mb-10 ">
                                             <input type="radio" className="form-check-input  mt-2" name="paymentMethod" id="payWithCard" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCard" >Pay with Card</label>
                                             {/* <span className="icon" aria-hidden="true">&#xf08b;</span> */}
                                        </div>
                                        <div className="form-check mb-10">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithBankTransfer" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithBankTransfer">Pay with Bank Transfer</label>
                                             {/* <span className="icon" aria-hidden="true">&#xf08b;</span> */}
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* </div> */}
          </>
     )
}