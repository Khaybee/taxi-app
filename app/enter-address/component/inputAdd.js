"use client"
import { useState, useEffect, useReducer } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import "../../styles/loggedHero.css";
import Swal from 'sweetalert2'
import getAuthToken from "../../utils/getAuthToken"

const apiUrl = process.env.NEXT_PUBLIC_API_URL


const InputAddress = (props) => {

     const [showCompanies, setShowCompanies] = useState(false);
     const router = useRouter();
     const [pickup, setPickup] = useState('');
     const [destination, setDestination] = useState('');
     const [faresData, setFaresData] = useState([]);
     const [valuesData, setValuesData] = useState([]);

     const [companiesData, setCompaniesData] = useState([]);

     const handleGetOptionsClick = async () => {
          try {

               const authToken = getAuthToken()
               const res = await fetch(`${apiUrl}/api/get-address`, {
                    method: 'POST',
                    body: JSON.stringify({ pickup, destination }),
                    cache: 'no-store',
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${authToken}`,
                    }
               })
               if (!res.ok) {

                    throw new Error('Failed to fetch data')
               }

               const data = await res.json()

               if (data.success === true) {
                    const result = data.data.companies
                    const fares = data.data.fares
                    const values = data.data.values

                    console.log(result);

                    setFaresData(fares);
                    setValuesData(values)
                    setCompaniesData(result)

                    setShowCompanies(true);
                    localStorage.setItem('showCompanies', JSON.stringify(true));
                    localStorage.setItem('faresData', JSON.stringify(fares));
                    localStorage.setItem('companiesData', JSON.stringify(result));
                    localStorage.setItem('valuesData', JSON.stringify(values));
               } else if (data.success === false) {

                    Swal.fire({
                         icon: "error",
                         title: "Something went wrong",
                         text: data.message,
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
     };

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
                                        <p className=" fs-5 fw-semibold">Enter Address below</p>
                                   </div>
                                   <form className="row bg-white rounded-4 shadow-lg mb-3">
                                        <div className=" col-lg-9">
                                             <div className=" py-3 px-3">

                                                  <div className="row align-items-center">

                                                       <div className="col-lg-6 border-end">
                                                            <label className="row fs-4">From</label>
                                                            <input className=" py-2 row border-0 fs-5 w-100" placeholder=""
                                                                 value={pickup}
                                                                 onChange={(e) => setPickup(e.target.value)}
                                                            />
                                                       </div>
                                                       <div className="col-lg-6">
                                                            <label className="row fs-4 ps-2">To</label>
                                                            <input className="px-2 py-2 row border-0 fs-5 w-100" placeholder=""
                                                                 onChange={(e) => setDestination(e.target.value)}
                                                            />
                                                       </div>

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>


                                             <div className="btn ss-btn smoth-scroll z-0 w-75" onClick={handleGetOptionsClick}>
                                                  Get Options <i className="fal fa-long-arrow-up"></i>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>

                    <div className=" mt-100 pb-125 ">
                         {showCompanies && (
                              <div className="container  w-75">
                                   <div className="row">
                                        {/* companiesData */}
                                        {companiesData.map((company, index) => (
                                             <div key={company.id} className="row bg-white rounded-4  shadow-sm mb-3">
                                                  <div className=" col-lg-9">
                                                       <div className=" py-4 px-3">
                                                            <div className=" p-2"></div>
                                                            <div className="row align-items-center">
                                                                 <div className="col-lg-2">
                                                                      <img src={`/images/icon/${company.icon_url}`} width="155px" className=" rounded-2 me-5 d-md-inline-block d-none" />
                                                                 </div>
                                                                 <div className="col-lg-3 fs-4 fw-bold">
                                                                      {company.name}
                                                                 </div>
                                                                 <div className="col-lg-4 text-center ">
                                                                      <p className=" mb-0">{company.type}</p>
                                                                      <p>maximum passengers: ({company.passengers})</p>
                                                                 </div>

                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-3 text-center my-2 py-4 px-3 " style={{ backgroundColor: '#fffaec', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'center' }}>

                                                       <p className=" mb-1 fs-3 d-flex align-items-center"><img src="/images/icon/naira-icon.png" width="30px" height="30px" className="col" /><span>{faresData[index]}</span></p>
                                                       <Link href={`/enter-address/${company.id}`} >
                                                            <div className="btn-3 ss-btn smoth-scroll  z-0  ">
                                                                 See Drivers
                                                            </div>
                                                       </Link>


                                                  </div>
                                             </div>
                                        ))}

                                   </div>
                              </div>
                         )}

                    </div>
               </div>
          </>
     );
};

export default InputAddress;