"use client"
import Link from "next/link";
import "../../../styles/loggedHero.css";


const DisplayLocations = ({pickupAddress, destinationAddress}) => {

  // console.log(pickupAddress);
  // console.log(destinationAddress);

  return (
    <>

      <div className=" pt-70 bg-body-tertiary" style={{ height: '100%' }}>
        <div className="bg-body-secondary px-5 w-100 mb-100 " style={{ height: '10%' }}>
          <div className=" container w-75 ">
            <div className=" row py-5  ">

              <form className="row bg-white rounded-4 shadow-lg mb-3">
                <div className=" col-lg-12">
                  <div className=" py-3 px-3">

                    <div className="row align-items-center">

                      <div className="col-lg-6 border-end">
                        <label className="row fs-4">From</label>
                        <div className=" py-2 row border-0 fs-5" placeholder="" >{pickupAddress}</div>
                      </div>
                      <div className="col-lg-6">
                        <label className="row fs-4 ps-2">To</label>
                        <div className="px-2 py-2 row border-0 fs-5" placeholder="" >{destinationAddress}</div>
                      </div>

                    </div>
                  </div>
                </div>
         
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default DisplayLocations;
