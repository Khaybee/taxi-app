import Link from "next/link";
import "../../styles/loggedHero.css";



const InputAddress = (props) => {

     return (
          <>

               <div className=" bg-body-tertiary" style={{ height: '100%' }}>
                    <div className=" bg-body-secondary px-5 w-100 mb-100 " style={{ height: '10%' }}>
                         <div className=" container w-75 ">
                              <div className=" row py-5  ">
                                   <div className="">
                                        <p className="lead fw-bold fs-4 hero-question">
                                             Ready for your ride?
                                        </p>
                                        <p className=" fs-5 fw-semibold">Enter Adress below</p>
                                   </div>
                                   <form className="row bg-white rounded-4 shadow-lg mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-3 px-3">

                                                  <div className="row align-items-center">

                                                       <div className="col-lg-6 border-end">
                                                            <label className="row fs-4">From</label>
                                                            <input className=" py-2 row border-0 fs-5" placeholder="" />
                                                       </div>
                                                       <div className="col-lg-6">
                                                            <label className="row fs-4 ps-2">To</label>
                                                            <input className="px-2 py-2 row border-0 fs-5" placeholder="" />
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>


                                             <div className="btn ss-btn smoth-scroll z-0 w-75">
                                                  Get Options <i className="fal fa-long-arrow-up"></i>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>

                    <div className=" mt-100 pb-125 ">
                         <div className="container  w-75">
                              <div className="row">
                                   <div className="row bg-white rounded-4  shadow-sm mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-4 px-3">
                                                  <div className=" p-2"></div>
                                                  <div className="row align-items-center">
                                                       <div className="col-lg-2">
                                                            <img src="/images/icon/taxify-is-now-bolt.png" width="155px" className=" rounded-2 me-5 d-md-inline-block d-none" />
                                                       </div>
                                                       <div className="col-lg-3 fs-4 fw-bold">
                                                            BOLT
                                                       </div>
                                                       <div className="col-lg-4 text-center ">
                                                            <p className=" mb-0">Comfort</p>
                                                            <p>maximum passengers: (4)</p>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ backgroundColor: '#fffaec', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>

                                             <p className=" mb-1 fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="col" /><span>8500</span></p>
                                             <div className="btn ss-btn smoth-scroll z-0 w-75 ">
                                                  See Drivers
                                             </div>

                                        </div>
                                   </div>
                                   <div className="row bg-white rounded-4 shadow-sm mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-4 px-3">
                                                  <div className=" p-2"></div>
                                                  <div className="row align-items-center">
                                                       <div className="col-lg-2">
                                                            <img src="/images/icon/uber-logo.jpg" width="155px" className=" rounded-2 me-5 d-md-inline-block d-none" />
                                                       </div>
                                                       <div className="col-lg-3 fs-4 fw-bold">
                                                            UBER
                                                       </div>
                                                       <div className="col-lg-4 text-center ">
                                                            <p className=" mb-0">Comfort</p>
                                                            <p>maximum passengers: (4)</p>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ backgroundColor: '#fffaec', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>

                                             <p className=" mb-1 fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="col" /><span>8500</span></p>
                                             <div className="btn ss-btn smoth-scroll z-0 w-75 ">
                                                  See Drivers
                                             </div>

                                        </div>
                                   </div>
                                   <div className="row bg-white rounded-4 shadow-sm mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-4 px-3">
                                                  <div className=" p-2"></div>
                                                  <div className="row align-items-center">
                                                       <div className="col-lg-2">
                                                            <img src="/images/icon/lyft-logo.png" width="155px" className=" rounded-2 me-5 d-md-inline-block d-none" />
                                                       </div>
                                                       <div className="col-lg-3 fs-4 fw-bold">
                                                            LYFT
                                                       </div>
                                                       <div className="col-lg-4 text-center ">
                                                            <p className=" mb-0">Luxury</p>
                                                            <p>maximum passengers: (3)</p>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ backgroundColor: '#fffaec', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>

                                             <p className=" mb-1 fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="col" /><span>8500</span></p>
                                             <div className="btn ss-btn smoth-scroll z-0 w-75 ">
                                                  See Drivers
                                             </div>

                                        </div>
                                   </div>
                                   <div className="row bg-white rounded-4 shadow-sm mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-4 px-3">
                                                  <div className=" p-2"></div>
                                                  <div className="row align-items-center">
                                                       <div className="col-lg-2">
                                                            <img src="/images/icon/rida-logo.png" width="155px" className=" rounded-2 me-5 d-md-inline-block d-none" />
                                                       </div>
                                                       <div className="col-lg-3 fs-4 fw-bold">
                                                            RIDA
                                                       </div>
                                                       <div className="col-lg-4 text-center ">
                                                            <p className=" mb-0">Comfort</p>
                                                            <p>maximum passengers: (4)</p>
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ backgroundColor: '#fffaec', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>

                                             <p className=" mb-1 fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="col" /><span>8500</span></p>
                                             <div className="btn ss-btn smoth-scroll z-0 w-75">
                                                  See Drivers
                                             </div>

                                        </div>
                                   </div>


                                   {/* 
                                   <form className=" shadow-lg p-3 bg-white row rounded-4 container  ">
                                        <div className="col-4 ms-1 border-end ">
                                             <label className="row fs-4">From</label>
                                             <input className=" py-2 row border-0 fs-4" placeholder="" />
                                        </div>
                                        <div className="col-4 ms-1 ">
                                             <label className="row fs-4">To</label>
                                             <input className=" py-2 row border-0 fs-4" placeholder="" />
                                        </div>
                                        <div className="col-3 text-center align-content-center"
                                             data-delay=".2s">
                                             <div className="btn ss-btn smoth-scroll z-0">
                                                  Get Options <i className="fal fa-long-arrow-up"></i>
                                             </div>
                                        </div>
                                   </form> */}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default InputAddress;