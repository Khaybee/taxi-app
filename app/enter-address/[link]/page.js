"use client"

import Link from "next/link";
import "../../styles/loggedHero.css";
import { useEffect, useState } from "react";
import DisplayLocations from '../../choose-option/components/show-locations'
import Swal from 'sweetalert2'
import getAuthToken from "../../utils/getAuthToken"
import { add } from "date-fns";
const apiUrl = process.env.NEXT_PUBLIC_API_URL




const fetchDrivers = async (formData) => {
     try {
          console.log(formData);
          const authToken = getAuthToken()
          const res = await fetch(`${apiUrl}/api/get-drivers`, {
               method: 'POST',
               body: JSON.stringify(formData),
               cache: 'no-store',
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,

               }
          })
          console.log(res);
          if (!res.ok) {

               throw new Error('Failed to fetch data')
          }

          const data = await res.json()

          console.log(data);

          return data
     } catch (error) {

          console.error('An error occurred: ', error)
     }
}

const AvailableDrivers = ({ params }) => {

     const link = params.link

     const priceString = localStorage.getItem('faresData')
     const addressString = localStorage.getItem('valuesData')

     let price;
     let address;

     if (priceString){
          try{
               price = JSON.parse(priceString)
               address = JSON.parse(addressString)
          } catch (error) {
               console.error('Error parsing JSON:', error);
          }
     }
     // console.log(link);

     const formData = {
           id: link,
           price: price[0],
           address: address
     }

     const [companiesDrivers, setCompaniesDrivers] = useState([]);
     const [pickupAddress, setPickupAddress] = useState([]);
     const [destinationAddress, setDestinationAddress] = useState([]);

     

     useEffect(() => {
          getDrivers(); // Call getDrivers function on page load
     }, []); // Empty dependency array ensures it runs only once on mount

// const price = localStorage.getItem('faresData')
const companyData = localStorage.getItem('companiesData')


     const getDrivers = async () => {
          try {
               
               const response = await fetchDrivers(formData)

               console.log(response);

               if (response.success === true) {
                    const result = response.data.driversWithRawaittndomTime
                    const addy = response.data.addy

                    console.log(addy)

                    setPickupAddress(addy.pickupFrom)
                    setDestinationAddress(addy.dropAt)
                    setCompaniesDrivers(result)


               } else if (response.success === false) {


                    Swal.fire({
                         icon: "error",
                         title: "Something went wrong",
                         text: response.message,
                         showConfirmButton: false,
                         timer: 2000
                    });

               }


          } catch (error) {

               Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Something went wrong!: ${error}`,

               });
          }
     }


     return (
          <>

               <DisplayLocations
                 pickupAddress={pickupAddress}
                 destinationAddress={destinationAddress}
                />

               {/*  */}
               <div className="  container h-100">
                    <div className=" pt-50 pb-70 g-4 mx-5 h-100">
                         <div className="mb-4 fw-medium fs-4">Available drivers near you <i className="fa fa-car"></i></div>
                         {companiesDrivers.map(drivers => (
                              <div key={drivers.id} className=" bg-white rounded-4 d-flex mb-50 shadow-lg">
                                   <div className=" col-lg-2 col-sm-2 p-3">
                                        <img src="/images/team/team01.png" width="150px" className=" rounded-4" />
                                   </div>

                                   <div className="  col-lg-4 d-flex col-sm-4 flex-column justify-content-between py-4">
                                        <div className=" ">
                                             <div className=" fs-4 fw-medium">{drivers.fullName}</div>
                                             <div>{drivers.carModel}</div>
                                             <div style={{ fontSize: "15px" }}>{drivers.gender}</div>

                                        </div>
                                        <div className=" " style={{ fontSize: "15px" }}>{drivers.waitTime} mins away</div>
                                   </div>
                                   <div className=" col-lg-2 col-md-2 d-sm-none d-md-flex d-lg-flex flex-column justify-content-center fs-3">
                                        <p className="  fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="" /><span>{drivers.price}</span></p>
                                   </div>
                                   <div className=" col-lg-4 col-md-4 col-sm-6 d-flex flex-column justify-content-lg-between align-items-end pe-lg-3 pe-sm-4 py-lg-4 py-sm-5 ">

                                        <div style={{ fontSize: "12px", paddingRight: "10px" }} className=" d-sm-none d-lg-inline-block">{drivers.completedRide} completed rides</div>
                                       <Link href={`/enter-address/${drivers.id}`}>
                                       <div className=" d-none d-lg-inline-block">
                                             <div className="btn ss-btn smoth-scroll z-0 w-100 d-none d-lg-inline-block">
                                                  Confirm ride
                                             </div>
               

                                        </div>
                                       </Link>
                                        <div className=" d-lg-none  d-inline-block ms-2 ">
                                             <p className="  fs-5 d-flex align-items-center d-md-none  d-inline-block"><img src="/images/icon/naira-icon.png" width="20px" height="20px" className="" /><span>{drivers.price}</span></p>
                                             <div className="btn ss-btn smoth-scroll z-0 px-2 pt-100 d-lg-none  d-inline-block " style={{ fontSize: "14px" }}>
                                                  Confirm ride
                                             </div>

                                        </div>

                                   </div>

                              </div>
                         ))}



                    </div>
               </div>
          </>
     );
};

export default AvailableDrivers;
