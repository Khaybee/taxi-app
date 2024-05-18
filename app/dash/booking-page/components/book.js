"use client";
import { useEffect, useState } from "react";
import Map from "../[driver]/map";
import { useRouter } from 'next/navigation';
import "./book.css"
import Swal from 'sweetalert2'
import DisplayLocations from "../../enter-address/component/show-locations";
const apiUrl = process.env.NEXT_PUBLIC_API_URL

const sendRide = async (formData) => {
     try {

          const res = await fetch(`${apiUrl}/api/create-ride`, {
               method: "POST",
               body: JSON.stringify(formData),
               cache: "no-store",

          });

          if (!res.ok) {
               throw new Error("Failed to fetch data");
          }
          const data = await res.json();

     } catch (error) {
          console.error(`Something went wrong: ${error}`)
     }
}

const deleteRide = async () => {
     try {

          const res = await fetch(`${apiUrl}/api/create-ride`, {
               method: "GET",
               cache: "no-store",
          });

          if (!res.ok) {
               throw new Error("Failed to fetch data");
          }
          const data = await res.json();



     } catch (error) {
          console.error(`Something went wrong: ${error}`)
     }
}



const Booked = props => {


     // const { data, fare } = props
     const { data } = props

     const driver = data[0].id
     let inpPickup;
     let inpDest;

     const selectedCompany = localStorage.getItem('selectedCompany')
     const pickup = localStorage.getItem('pickup')
     const rideFare = localStorage.getItem('rideFare')
     const destination = localStorage.getItem('destination')

     const cancelRide = () => {
          Swal.fire({
               title: "Are you sure you want to cancel your ride?",
               text: "You might have to wait longer",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, cancel it!"
             }).then((result) => {
               if (result.isConfirmed) {
                 Swal.fire({
                   title: "Deleted!",
                   text: "Your ride has been canceled.",
                   icon: "success"
                 });
                 
               //   deleteRide()
               }
             });
     }

     if (pickup && destination) {
          try {
               inpPickup = JSON.parse(pickup)
               inpDest = JSON.parse(destination)
          } catch (error) {
               console.error('Error parsing JSON:', error);
          }
     }

     // const trial = [inpDest.split(",")[0], inpDest.split(",")[1]].join(', ')
     // const trial2 = [inpPickup.split(",")[0], inpPickup.split(",")[2], inpPickup.split(",")[3], inpPickup.split(",")[4]].join(', ')

     const inputtedPickup = inpPickup.split(",")[0]
     const inputtedDest = inpDest.split(",")[0]

     const formData = {
          rideFare: rideFare,
          pickup: inpPickup,
          destination: inpDest,
          driver: driver
     }

     // sendRide(formData)

     useEffect(() => {
          const rideSent = localStorage.getItem('rideSent');

          if (!rideSent) {
               sendRide(formData).then(() => {
                    localStorage.setItem('rideSent', 'true');
               });
          }
     }, []);

     const company = JSON.parse(selectedCompany)

     const companyName = company.name
     const fare = company.fare


     return (
          <>
               <DisplayLocations
                    pickupAddress={inputtedPickup}
                    destinationAddress={inputtedDest}

               />
               <div className=" container w-100 ">
                    <div className=" row  mb-100">
                         <div className=" bg-white shadow-lg col-lg-8 col-sm-12 rounded-3 px-0">
                              <div>
                                   <Map />
                              </div>

                              <div key={data[0].id} className=" row mt-20 p-5" >
                                   <div className=" col-sm-4 col-md-4 col-lg-3"><img src={`/images/team/${data[0].photo}`} width="100%" height="100%" className=" rounded-4" /></div>
                                   <div className=" col-lg-9 col-sm-8">
                                        <div className=" row " style={{ height: "100%" }}>
                                             <div className=" col-lg-6">
                                                  <div className=" d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                                       <div>
                                                            <div className=" fs-4 fw-medium">{data[0].fullName}</div>
                                                            <div style={{ letterSpacing: "2px" }}>{data[0].carModel}  <i className="fa fa-car"></i></div>
                                                            <div style={{ letterSpacing: "1px" }}>{data[0].plateNo}</div>
                                                       </div>


                                                       <div style={{ fontSize: "15px" }}><span>from {companyName},</span><span className=" ms-2">{data[0].gender}</span></div>
                                                  </div>
                                             </div>
                                             <div className=" col-lg-6">
                                                  <div className=" d-flex flex-column justify-content-between align-items-sm-start align-items-lg-end" style={{ height: "100%" }}>
                                                       <div>
                                                            <div className=" pt-5 pb-10" style={{ fontSize: "14px" }}> <i className="fa fa-phone me-1"></i><a href="tel:+9034564322">{data[0].phone}</a></div>
                                                       </div>


                                                       <div style={{ fontSize: "15px" }}><div className="btn ss-btn smoth-scroll z-0 px-2 py-3" style={{ fontSize: "14px" }} onClick={cancelRide}>
                                                            Cancel ride
                                                       </div></div>
                                                  </div>


                                             </div>
                                        </div>

                                   </div>
                              </div>

                         </div>
                         <div className=" bg-white shadow-lg col-lg-3 ms-5 col-sm-12 d-lg-inline-block d-none mt-lg-4 mt-sm-5 rounded-2 py-2 " style={{ maxHeight: "400px" }}>
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
                                        <div className="form-check mb-10">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithBankTransfer" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithBankTransfer" >Pay Bank Transfer</label>
                                        </div>
                                        {/* <div className="form-check mb-10 ">
                                             <input type="radio" className="form-check-input  mt-2" name="paymentMethod" id="payWithCard" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCard" >Pay with Card</label>
                                        </div> */}

                                        <div className="form-check mb-10 position-relative">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithCard" disabled />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCard">
                                                  Pay with Card
                                                  <div className="badge bg-danger position-absolute" style={{ left: "40%", top: "100%", transform: "translate(-50%, -50%)" }}>
                                                       Coming soon
                                                  </div>

                                             </label>
                                        </div>

                                   </div>
                                   <hr className="border border-1 border-black mt-50"></hr>
                                   <div className=" d-flex fs-4">
                                        <div className="  fw-medium col-lg-3 col-6 me-lg-0 me-sm-3">
                                             Price:
                                        </div>
                                        <div className=" col-lg-5  col-6col-sm-2 d-flex align-items-center"> <img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /> <span>{fare}</span></div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className=" bg-white shadow-lg col-lg-3 rounded-3 mb-100 col-sm-12 d-lg-none d-inline-block mt-lg-4 mt-sm-3 " style={{ maxHeight: "500px" }}>
                              <div className=" p-5 ">
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
                                        <div className="form-check mb-10">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithBankTransfer" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithBankTransfer" >Pay Bank Transfer</label>
                                        </div>
                                        {/* <div className="form-check mb-10 ">
                                             <input type="radio" className="form-check-input  mt-2" name="paymentMethod" id="payWithCard" />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCard" >Pay with Card</label>
                                        </div> */}

                                        <div className="form-check mb-10 position-relative">
                                             <input type="radio" className="form-check-input mt-2" name="paymentMethod" id="payWithCard" disabled />
                                             <label className="form-check-label fw-medium" htmlFor="payWithCard">
                                                  Pay with Card
                                                  <div className="badge bg-danger position-absolute" style={{ left: "40%", top: "100%", transform: "translate(-50%, -50%)" }}>
                                                       Coming soon
                                                  </div>

                                             </label>
                                        </div>

                                   </div>
                                   <hr className="border border-1 border-black mt-50"></hr>
                                   <div className=" d-flex fs-4">
                                        <div className="  fw-medium col-lg-3 col-6 me-lg-0 me-sm-3">
                                             Price:
                                        </div>
                                        <div className=" col-lg-5  col-6col-sm-2 d-flex align-items-center"> <img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /> <span>{fare}</span></div>
                                   </div>
                              </div>
                         </div>
               </div>



          </>
     )
}

export default Booked;