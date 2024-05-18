"use client"
import { useState } from "react";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

const apiUrl = process.env.NEXT_PUBLIC_API_URL



const ProfileDetails = (props) => {

     const { user, rideCount } = props

     const [isEditing, setIsEditing] = useState(false);
     const handleCancel = () => {
          setIsEditing(false);
      };
    const [editUser, setEditUser] = useState({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    

    const handleSave = async () => {

     try {
          const res = await fetch(`${apiUrl}/api/profile`, {
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(editUser)
          });
      
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await res.json();
          
         if (data.success === true){
          toast.dismiss()
          Swal.fire({
               icon: "success",
               title: "Saved",
               showConfirmButton: false,
               timer: 1500
             });
          setTimeout(() => {
               setIsEditing(false);
          }, 2000)
         } else if (data.success === false){
          Swal.fire({
               icon: "error",
               title: "Oops...",
               text: data.message,
             });
         }
     } catch (error) {
          console.error("Something went wrong: ", error)
     }
    }

    const handleConfirm = async () => {
     Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {

          setTimeout(async() => {
               await handleSave()
          }, 1000)
            
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            setIsEditing(false);
          }
        });
    }




     return (
          <>
          
               <div className="row justify-content-center align-items-center h-100 container mx-auto mt-60 rounded-3 ">

                    {!isEditing ? (
                         <>
                              <div className="p-5">
                                   <div className=" bg-white shadow-lg ">
                                        <div>
                                             <div className="row ">
                                                  <div className="col-lg-4  border-end p-xl-5 p-2">
                                                       <div className=" row text-center h-100 align-items-center p-lg-5 p-2 ">
                                                            <div className="">
                                                                 <img src="/images/team/team01.png" style={{ width: "100%" }} height="" className="rounded-circle d-lg-block d-none " />
                                                                 <img src="/images/team/team01.png" style={{ width: "50%" }} height="" className="rounded-circle d-lg-none d-block mx-auto mt-10 " />
                                                                 <div className=" mt-10">
                                                                      <p className=" fw-bold mb-0" style={{ fontSize: "18px" }}>{user.fullName}</p>
                                                                      <p className=" fw-bold mb-0" style={{ fontSize: "16px" }}>{user.addCountry}</p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-8 p-5">
                                                       <div className=" row align-content-center d-lg-block d-none">
                                                            <div className=" d-flex justify-content-between align-content-center">
                                                                 <div>
                                                                      <a href="/dash/enter-address">
                                                                           <img src="/images/icon/go_back_icon2.webp" width="35px" className=" " />
                                                                      </a>
                                                                      <span> Back to booking page</span>
                                                                 </div>
                                                                 <div>
                                                                      <div className=" border border-1 bg-warning p-2 me-4 rounded-2" style={{ cursor: "pointer", }}  onClick={() => setIsEditing(true)}>
                                                                           <i className="fal fa-edit"></i> Edit Profile
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                       </div>
                                                       <div className=" row align-content-center d-lg-none d-block">
                                                            <div className=" d-flex justify-content-between align-content-center">
                                                                 <div>
                                                                      <a href="/dash/enter-address">
                                                                           <img src="/images/icon/go_back_icon2.webp" width="35px" className=" " />
                                                                      </a>

                                                                 </div>
                                                                 <div>
                                                                      <div className=" border border-1 bg-warning p-2  rounded-2" style={{ cursor: "pointer", }}  onClick={() => setIsEditing(true)}>
                                                                           <i className="fal fa-edit"></i>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                       </div>
                                                       <div className=" row mt-4 justify-content-between">
                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <div className=" d-inline-block col-lg-5 me-4 p-2 border border-1">{user.firstName || "First Name"}</div>
                                                                 <div className="d-inline-block col-lg-5 ms-4 p-2 border border-1">{user.lastName || "Last Name"}</div>

                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <div className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1">{user.firstName || "First Name"}</div>
                                                                 <div className="d-inline-block  w-100 p-2 border border-1">{user.lastName || "Last Name"}</div>

                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <div className=" d-inline-block col-lg-5 me-4 p-2 border border-1">{user.email || "Email"}</div>
                                                                 <div className="d-inline-block col-lg-5 ms-4 p-2 border border-1">{user.phone || "Phone Number"}</div>

                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <div className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1">{user.email || "Email"}</div>
                                                                 <div className="d-inline-block  w-100 p-2 border border-1">{user.phone || "Phone Number"}</div>

                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <div className=" d-inline-block col-lg-5 me-4 p-2 border border-1">{user.address || "House Address"}</div>
                                                                 <div className="d-inline-block col-lg-5 ms-4 p-2 border border-1">{user.city || "State"}</div>

                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <div className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1">{user.address || "House Address"}</div>
                                                                 <div className="d-inline-block  w-100 p-2 border border-1">{user.city || "State"}</div>

                                                            </div>

                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <div className=" p-2 py-3 bg-warning-subtle border border-1 rounded-3" style={{ width: "20%", height: "100%" }}>
                                                                      <div className=" fw-semibold " style={{ fontSize: "18px" }}>No. of Rides</div>
                                                                      <div className=" pt-2 fs-3 fw-semibold ms-4">{rideCount}</div>
                                                                 </div>
                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <div className=" p-2 py-3 text-center bg-warning-subtle border border-1 rounded-3" style={{ width: "50%", height: "100%" }}>
                                                                      <div className=" fw-semibold " style={{ fontSize: "18px" }}>No. of Rides</div>
                                                                      <div className=" pt-2 fs-3 fw-semibold ms-4">{rideCount}</div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>
                    ) : (

                         <>
                              <div className="p-5">
                                   <div className=" bg-white shadow-lg ">
                                        <div>
                                             <div className="row ">
                                                  <div className="col-lg-4  border-end p-xl-5 p-2">
                                                       <div className=" row text-center h-100 align-items-center p-lg-5 p-2 ">
                                                            <div className="">
                                                                 <img src="/images/team/team01.png" style={{ width: "100%" }} height="" className="rounded-circle d-lg-block d-none " />
                                                                 <img src="/images/team/team01.png" style={{ width: "50%" }} height="" className="rounded-circle d-lg-none d-block mx-auto mt-10 " />

                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-8 p-5">
                                                       <div className=" row align-content-center d-lg-block d-none">
                                                            <div className=" d-flex justify-content-between align-content-center">
                                                                 <div>
        
                                                                           <img src="/images/icon/go_back_icon2.webp" width="35px" className=" " style={{cursor: "pointer"}} onClick={handleCancel} />


                                                                 </div>

                                                            </div>

                                                       </div>
                                                       <div className=" row align-content-center d-lg-none d-block">
                                                            <div className=" d-flex justify-content-between align-content-center">
                                                                 <div>
                                           
                                                                           <img src="/images/icon/go_back_icon2.webp" width="35px" className=" "  style={{cursor: "pointer"}}  onClick={handleCancel} />
                                         

                                                                 </div>
                                                                 <div>
                                                                      <div className=" border border-1 bg-warning p-2  rounded-2" style={{ cursor: "pointer", }}>
                                                                           <i className="fal fa-edit"></i>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                       </div>

                                                       <div className=" row mt-2 justify-content-between">
                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <input className=" d-inline-block col-lg-5 me-4 p-2 border border-1" 
                                                                  name="firstName"
                                                                  value={editUser.firstName}
                                                                  onChange={handleChange} />
                                                                 <input className="d-inline-block col-lg-5 ms-4 p-2 border border-1" 
                                                                   name="lastName"
                                                                   onChange={handleChange}
                                                                 value={editUser.lastName} />
                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <input className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1"
                                                                   name="firstName"
                                                                 
                                                                   onChange={handleChange}
                                                                 value={editUser.firstName} />
                                                                 <input className="d-inline-block  w-100 p-2 border border-1"
                                                                  name="lastName"
                                                                  onChange={handleChange} value={editUser.lastName} />
                                                            </div>

                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <input className=" d-inline-block col-lg-5 me-4 p-2 border border-1"
                                                                    name="email"
                                                                    onChange={handleChange}
                                                                 value={editUser.email} />
                                                                 <input className="d-inline-block col-lg-5 ms-4 p-2 border border-1"
                                                                       name="phone"
                                                                       value={editUser.phone}
                                                                       onChange={handleChange}
                                                                 placeholder="Phone Number" />
                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <input className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1"
                                                                    name="email"
                                                                    onChange={handleChange}
                                                                  value={editUser.firstName} />
                                                                 <input className="d-inline-block  w-100 p-2 border border-1"
                                                                 name="phone"
                                                                 value={editUser.phone}
                                                                 onChange={handleChange} placeholder="Phone Number" />
                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-block d-none">
                                                                 <input className=" d-inline-block col-lg-5 me-4 p-2 border border-1"
                                                                  name="address"
                                                                  value={editUser.address}
                                                                  onChange={handleChange}  placeholder="House Address" />
                                                                 <input className="d-inline-block col-lg-5 ms-4 p-2 border border-1"
                                                                  name="city"
                                                                  value={editUser.city}
                                                                  onChange={handleChange} placeholder="State" />
                                                            </div>
                                                            <div className=" w-100 mb-4 d-lg-none d-block">
                                                                 <input className=" d-inline-block w-100 mb-20 me-4 p-2 border border-1"
                                                                  name="address"
                                                                  value={editUser.address}
                                                                  onChange={handleChange}  placeholder="House Address" />
                                                                 <input className="d-inline-block  w-100 p-2 border border-1"
                                                                  name="city"
                                                                  value={editUser.city}
                                                                  onChange={handleChange} placeholder="State" />
                                                            </div>



                                                       </div>

                                                       <div className=" mt-2 row align-content-center">
                                                            <div className=" d-flex justify-content-between">
                                                                 <div>
                                                                      <div>

                                                                      </div>
                                                                 </div>
                                                                 <div>
                                                                      <span className=" border border-1 bg-warning p-2 me-2 rounded-2" style={{ cursor: "pointer" }} onClick={handleConfirm}>
                                                                           Save Profile
                                                                      </span>
                                                                      <span className=" border border-1 bg-danger p-2 me-4 rounded-2" style={{ cursor: "pointer" }} onClick={handleCancel}>
                                                                           Cancel Edit
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>
                    )}
               </div>

          </>
     );
};

export default ProfileDetails;
