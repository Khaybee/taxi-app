import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";
import SideProfile from "@/app/components/sideProfile";

const AvailableDrivers = (props) => {
  return (
    <>
      <div className="body  container-fluid bg-body-secondary h-100">
        <div className=" pt-100 g-4 ms-5 h-100">
          <div className=" bg-white rounded-4 d-flex mb-50">
            <div className=" col-lg-2 p-3">
               <img src="/images/team/team01.png" width="150px" className=" rounded-4"/>
            </div>
            
              <div className=" col-lg-5 row">huhh</div>
              <div className=" col-lg-2">jjb</div>
              <div className=" col-lg-3">hjhv</div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50">
            <div className=" col-lg-2 p-3">
               <img src="/images/team/team01.png" width="150px" className=" rounded-4"/>
            </div>
            
              <div className=" col-lg-5 row">huhh</div>
              <div className=" col-lg-2">jjb</div>
              <div className=" col-lg-3">hjhv</div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50">
            <div className=" col-lg-2 p-3">
               <img src="/images/team/team01.png" width="150px" className=" rounded-4"/>
            </div>
            
              <div className=" col-lg-5 row">huhh</div>
              <div className=" col-lg-2">jjb</div>
              <div className=" col-lg-3">hjhv</div>

          </div>
          <div className=" bg-white rounded-4 d-flex mb-50">
            <div className=" col-lg-2 p-3">
               <img src="/images/team/team01.png" width="150px" className=" rounded-4"/>
            </div>
            
              <div className=" col-lg-5 row">huhh</div>
              <div className=" col-lg-2">jjb</div>
              <div className=" col-lg-3">hjhv</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableDrivers;
