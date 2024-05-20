"use client"
import { useState } from "react";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL



const MyRides = (props) => {

     const { data } = props


     return (
          <>

               <div className="row justify-content-center align-items-center h-100 container mx-auto mt-60 rounded-3 ">

                    <div className="p-5">
                              <div>
                                   <div className=" fs-4 fw-semibold mb-30">Here are your ride details:</div>
                                   <div className="row "><table className="table table-bordered shadow-lg rounded-4">
                                        <thead>
                                             <tr>
                                                  <th scope="col">ID</th>
                                                  <th scope="col">Driver</th>
                                                  <th scope="col">Company</th>
                                                  <th scope="col">Pickup Address</th>
                                                  <th scope="col">Destination</th>
                                                  <th scope="col">Ride Fare</th>
                                                  <th scope="col">Time</th>
                                                  <th scope="col">Date</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                        {data && data.length > 0 ? (
                                        data.map((ride) => (
                                            <tr key={ride.id}>
                                                <th scope="row">{ride.id}</th>
                                                <td>{ride.fullName}</td>
                                                <td>{ride.name}</td>
                                                <td>{ride.pickup}</td>
                                                <td>{ride.destination}</td>
                                                <td>{ride.fare}</td>
                                                <td>{ride.formattedTime}</td>
                                                <td>{ride.formattedDate}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center">
                                                No rides available
                                            </td>
                                        </tr>
                                    )}
                                          
                                        </tbody>
                                   </table>

                                   </div>
                              </div>
                         </div>
                    </div>

          </>
     );
};

export default MyRides;
