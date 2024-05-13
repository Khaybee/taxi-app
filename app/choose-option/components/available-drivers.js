import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";
import DisplayLocations from './show-locations'


const AvailableDrivers = (props) => {
  return (
    <>

      <DisplayLocations />

      {/*  */}
      <div className="  container h-100">
        <div className=" pt-50 pb-70 g-4 mx-5 h-100">
          <div className=" bg-white rounded-4 d-flex mb-50 shadow-lg">
            <div className=" col-lg-2 col-sm-2 p-3">
              <img src="/images/team/team01.png" width="150px" className=" rounded-4" />
            </div>

            <div className="  col-lg-4 d-flex col-sm-4 flex-column justify-content-between py-4">
              <div className=" ">
                <div className=" fs-4 fw-medium">Osuji Akachi</div>
                <div>Toyota Corolla</div>
                <div style={{ fontSize: "15px" }}>Male</div>

              </div>
              <div className=" " style={{ fontSize: "15px" }}>10 mins away</div>
            </div>
            <div className=" col-lg-2 col-md-2 d-sm-none d-md-flex d-lg-flex flex-column justify-content-center fs-3">
              <p className="  fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /><span>8500</span></p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-lg-between align-items-end pe-lg-3 pe-sm-4 py-lg-4 py-sm-5 ">

              <div style={{ fontSize: "12px", paddingRight: "10px" }} className=" d-sm-none d-lg-inline-block">50 completed rides</div>
              <div className=" d-none d-lg-inline-block">
                <div className="btn ss-btn smoth-scroll z-0 w-100 d-none d-lg-inline-block ">
                  Confirm ride
                </div>
                
              </div>
              <div className=" d-lg-none  d-inline-block ms-2 ">
                <p className="  fs-5 d-flex align-items-center d-md-none  d-inline-block"><img src="/images/icon/naira-icon.png" width="20px" height="20px" className="" /><span>8500</span></p>
              <div className="btn ss-btn smoth-scroll z-0 px-2 pt-100 d-lg-none  d-inline-block " style={{fontSize: "14px"}}>
                  Confirm ride
                </div>
                
              </div>

            </div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50 shadow-lg">
            <div className=" col-lg-2 col-sm-2 p-3">
              <img src="/images/team/team01.png" width="150px" className=" rounded-4" />
            </div>

            <div className="  col-lg-4 d-flex col-sm-4 flex-column justify-content-between py-4">
              <div className=" ">
                <div className=" fs-4 fw-medium">Osuji Akachi</div>
                <div>Toyota Corolla</div>
                <div style={{ fontSize: "15px" }}>Male</div>

              </div>
              <div className=" " style={{ fontSize: "15px" }}>10 mins away</div>
            </div>
            <div className=" col-lg-2 col-md-2 d-sm-none d-md-flex d-lg-flex flex-column justify-content-center fs-3">
              <p className="  fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /><span>8500</span></p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-lg-between align-items-end pe-lg-3 pe-sm-4 py-lg-4 py-sm-5 ">

              <div style={{ fontSize: "12px", paddingRight: "10px" }} className=" d-sm-none d-lg-inline-block">50 completed rides</div>
              <div className=" d-none d-lg-inline-block">
                <div className="btn ss-btn smoth-scroll z-0 w-100 d-none d-lg-inline-block ">
                  Confirm ride
                </div>
                
              </div>
              <div className=" d-lg-none  d-inline-block ms-2 ">
                <p><p className="  fs-5 d-flex align-items-center d-md-none  d-inline-block"><img src="/images/icon/naira-icon.png" width="20px" height="20px" className="" /><span>8500</span></p></p>
              <div className="btn ss-btn smoth-scroll z-0 px-2 pt-100 d-lg-none  d-inline-block " style={{fontSize: "14px"}}>
                  Confirm ride
                </div>
                
              </div>

            </div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50 shadow-lg">
            <div className=" col-lg-2 col-sm-2 p-3">
              <img src="/images/team/team01.png" width="150px" className=" rounded-4" />
            </div>

            <div className="  col-lg-4 d-flex col-sm-4 flex-column justify-content-between py-4">
              <div className=" ">
                <div className=" fs-4 fw-medium">Osuji Akachi</div>
                <div>Toyota Corolla</div>
                <div style={{ fontSize: "15px" }}>Male</div>

              </div>
              <div className=" " style={{ fontSize: "15px" }}>10 mins away</div>
            </div>
            <div className=" col-lg-2 col-md-2 d-sm-none d-md-flex d-lg-flex flex-column justify-content-center fs-3">
              <p className="  fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /><span>8500</span></p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-lg-between align-items-end pe-lg-3 pe-sm-4 py-lg-4 py-sm-5 ">

              <div style={{ fontSize: "12px", paddingRight: "10px" }} className=" d-sm-none d-lg-inline-block">50 completed rides</div>
              <div className=" d-none d-lg-inline-block">
                <div className="btn ss-btn smoth-scroll z-0 w-100 d-none d-lg-inline-block ">
                  Confirm ride
                </div>
                
              </div>
              <div className=" d-lg-none  d-inline-block ms-2 ">
                <p><p className="  fs-5 d-flex align-items-center d-md-none  d-inline-block"><img src="/images/icon/naira-icon.png" width="20px" height="20px" className="" /><span>8500</span></p></p>
              <div className="btn ss-btn smoth-scroll z-0 px-2 pt-100 d-lg-none  d-inline-block " style={{fontSize: "14px"}}>
                  Confirm ride
                </div>
                
              </div>

            </div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50 shadow-lg">
            <div className=" col-lg-2 col-sm-2 p-3">
              <img src="/images/team/team01.png" width="150px" className=" rounded-4" />
            </div>

            <div className="  col-lg-4 d-flex col-sm-4 flex-column justify-content-between py-4">
              <div className=" ">
                <div className=" fs-4 fw-medium">Osuji Akachi</div>
                <div>Toyota Corolla</div>
                <div style={{ fontSize: "15px" }}>Male</div>

              </div>
              <div className=" " style={{ fontSize: "15px" }}>10 mins away</div>
            </div>
            <div className=" col-lg-2 col-md-2 d-sm-none d-md-flex d-lg-flex flex-column justify-content-center fs-3">
              <p className="  fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /><span>8500</span></p>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-lg-between align-items-end pe-lg-3 pe-sm-4 py-lg-4 py-sm-5 ">

              <div style={{ fontSize: "12px", paddingRight: "10px" }} className=" d-sm-none d-lg-inline-block">50 completed rides</div>
              <div className=" d-none d-lg-inline-block">
                <div className="btn ss-btn smoth-scroll z-0 w-100 d-none d-lg-inline-block ">
                  Confirm ride
                </div>
                
              </div>
              <div className=" d-lg-none  d-inline-block ms-2 ">
                <p><p className="  fs-5 d-flex align-items-center d-md-none  d-inline-block"><img src="/images/icon/naira-icon.png" width="20px" height="20px" className="" /><span>8500</span></p></p>
              <div className="btn ss-btn smoth-scroll z-0 px-2 pt-100 d-lg-none  d-inline-block " style={{fontSize: "14px"}}>
                  Confirm ride
                </div>
                
              </div>

            </div>

          </div>



        </div>
      </div>
    </>
  );
};

export default AvailableDrivers;
