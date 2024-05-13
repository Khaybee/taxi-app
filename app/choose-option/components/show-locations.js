"use client"

import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";


const DisplayLocations = (props) => {
  return (
    <>

      <div className=" bg-body-tertiary" style={{ height: '100%' }}>
        <div className="bg-body-secondary px-5 w-100 mb-100 " style={{ height: '10%' }}>
          <div className=" container w-75 ">
            <div className=" row py-5  ">

              <form className="row bg-white rounded-4 shadow-lg mb-3">
                <div className=" col-lg-12">
                  <div className=" py-3 px-3">

                    <div className="row align-items-center">

                      <div className="col-lg-6 border-end">
                        <label className="row fs-4">From</label>
                        <div className=" py-2 row border-0 fs-5" placeholder="" >pickup-location</div>
                      </div>
                      <div className="col-lg-6">
                        <label className="row fs-4 ps-2">To</label>
                        <div className="px-2 py-2 row border-0 fs-5" placeholder="" >destination</div>
                      </div>

                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>


                  <div className="btn ss-btn smoth-scroll z-0 w-75">
                    Get Options <i className="fal fa-long-arrow-down"></i>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default DisplayLocations;
