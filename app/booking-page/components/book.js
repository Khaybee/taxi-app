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
                                        <div className=" row " style={{height: "100%"}}>
                                             <div className=" col-lg-6">
                                                  <div className=" d-flex flex-column justify-content-between" style={{height: "100%"}}>
                                                 <div>
                                                 <div  className=" fs-4 fw-medium">Osuji Akachi</div>
                                                  <div style={{letterSpacing: "2px" }}>Toyota Camry</div>
                                                  <div style={{letterSpacing: "1px" }}>ABJ-12346</div>
                                                 </div>
                                                
                                                 
                                                  <div style={{ fontSize: "15px" }}><span>from Bolt,</span><span className=" ms-2">Male</span></div>
                                                  </div>
                                             </div>
                                             <div className=" col-lg-6">
                                             <div className=" d-flex flex-column justify-content-between align-items-end" style={{height: "100%"}}>
                                                 <div>
                                                  <div className=" pt-5">09034564322</div>
                                                 </div>
                                                
                                                 
                                                  <div style={{ fontSize: "15px" }}><button>Cancel Ride</button></div>
                                                  </div>
                                                   

                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>
                         <div className=" bg-white shadow-lg col-lg-3 ms-5 " style={{ maxHeight: "500px" }}>
                              <div className=" p-2 text-center">
                                   <h3>Payment Method</h3>
                              </div>
                         </div>
                    </div>
               </div>
               {/* </div> */}
          </>
     )
}