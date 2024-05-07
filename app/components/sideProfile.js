import Link from "next/link";
import "../styles/loggedHero.css";
import { useEffect, useState } from "react";

const SideProfile = (props) => {

     return (
          <>
             <div className="col-lg-4 d-none d-lg-block d-flex bg-white flex-column align-items-center rounded-4 p-5 container-fluid text-center  border border-2 border-warning">
                              <img src="/images/team/team01.png" width="150px" className=" rounded-circle"/>
                              <form></form>
                              </div>
          </>
     );
};

export default SideProfile;
