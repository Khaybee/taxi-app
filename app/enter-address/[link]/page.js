import "../../styles/loggedHero.css";
import Swal from 'sweetalert2'
import getAuthToken from "../../utils/getAuthToken"
import ListDrivers from "../component/listDrivers"
const apiUrl = process.env.NEXT_PUBLIC_API_URL



const AvailableDrivers = async ({ params }) => {
     const link = params.link

     const formData = { link }

     try {

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

          if (!res.ok) {

               throw new Error('Failed to fetch data')
          }

          const data = await res.json()
          console.log(data);
     } catch (error) {

          console.log("Something went wrong:", error);
     }
     
     return (
          <>
               {/* <ListDrivers /> */}
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