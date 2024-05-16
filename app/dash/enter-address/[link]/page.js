import "../../../styles/loggedHero.css";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
import ListDrivers from '../component/listDrivers'
import { headers } from "next/headers";


const AvailableDrivers = async ({ params }) => {
     const id = params.link
     const formData = { id }

     let drivers
     try {
          const headersInstance = headers()
          const authorization = headersInstance.get('authorization')
          const res = await fetch(`${apiUrl}/api/get-drivers`, {
               method: 'POST',
               body: JSON.stringify(formData),
               cache: 'no-store',
               headers: { authorization }

          })
          if (!res.ok) {
               throw new Error('Failed to fetch data')
          }
          const data = await res.json()
          drivers = data.data.driversWithRawaittndomTime
     } catch (error) {

          console.log("Something went wrong:", error);
     }
     
     return (
          <>
               <ListDrivers data={drivers} />
          </>
     );
};

export default AvailableDrivers;



// if (data.success === true) {

//      const result = data.data.driversWithRawaittndomTime
//      const addy = data.data.addy


//      setPickupAddress(addy.pickupFrom)
//      setDestinationAddress(addy.dropAt)
//      setCompaniesDrivers(result)

// } else if (data.success === false) {


//      Swal.fire({
//           icon: "error",
//           title: "Something went wrong",
//           text: response.message,
//           showConfirmButton: false,
//           timer: 2000
//      });

// }