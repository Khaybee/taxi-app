import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";
import SideProfile from "@/app/components/sideProfile";

const InputAddress = (props) => {
     const [isMounted, setIsMounted] = useState(false);

     useEffect(() => {
          setIsMounted(true);
     }, []);
     return (
          <>
               <div className="body  container-fluid bg-body-secondary h-100">
                    <div className="d-flex pt-100 g-4 ms-5 h-100">
                         <SideProfile />
                         <div className="col-lg-7 col-12 bg-white container-fluid d-flex flex-column rounded-4 p-5 ps-lg-5 ">
                              <div className=" w-75  rounded-3">
                                   {" "}
                                   {isMounted && (
                                        <div width="100%">
                                             <iframe
                                                  className=" rounded-3 border border-secondary border-2"
                                                  width="100%"
                                                  height="400"
                                                  frameborder="0"
                                                  scrolling="no"
                                                  marginheight="0"
                                                  marginwidth="0"
                                                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Plot%20681,%20Cadastral%20Zone%20C,%20OO,%20Research%20&amp;%20Institution%20Area,%20Airport%20Road,%20Jabi,%20Abuja%20900108,%20Federal%20Capital%20Territory+(SaveDrive%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                             >
                                                  <a href="https://www.gps.ie/">gps devices</a>
                                             </iframe>
                                        </div>
                                   )}
                              </div>
                              <div className=" mt-50  ">
                                   <form>
                                        <div>
                                             <label className="d-block fs-3 mb-30">Enter Pick-up Address:</label>
                                             <input type="text" className=" w-50 rounded-2 mb-20 p-2 fs-4" placeholder="Pickup" ></input>
                                        </div>
                                        <div>
                                             <label className="d-block fs-3 mt-30 mb-30">Enter Destination:</label>
                                             <input type="text" className=" w-50  rounded-2 mb-20 p-2 fs-4" placeholder="Destination" ></input>
                                        </div>
                                   </form>

                              </div>
                              <div
                                   className="cta-btn s-cta-btn wow fadeInRight animated w-50 text-center mt-30 mb-70"
                                   data-animation="fadeInDown"
                                   data-delay=".2s"
                              >
                                   <a href="about.html" className="btn ss-btn smoth-scroll">
                                        Find Driver <i className="fal fa-long-arrow-up"></i>
                                   </a>
                              </div>

                              

                         </div>
                    </div>

                  
               </div>
          </>
     );
};

export default InputAddress;
