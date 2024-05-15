
import { useRouter } from 'next/navigation';
import { useAppContext } from './context';
import { useContext } from 'react';
import getAuthToken from "../utils/getAuthToken"


const getDrivers = (props) => {

     const { state, dispatch } = useContext(useAppContext);
     const router = useRouter();
     const { id } = router.query; 

     const formData = {
          id
     }

     const { companies, fares, values } = state;

     console.log(companies);
     console.log(fares);
     console.log(values);
   

     useEffect(() => {
   const fetchDrivers = async () => {
     try {
          const authToken = getAuthToken()
          const res = await fetch(`${apiUrl}/api/get-address`, {
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
         
          return data
     } catch (error) {
         
          console.error('An error occurred: ', error)
     }
   }

   if (id) {
     fetchData();
   }
 }, [id]);
     
 

     return (
<>
<h1>Hello</h1>

<div>
      <h1>Company Details</h1>
      <p>Company ID: {id}</p>
      {/* Display fetched company data here */}
    </div>
</>
     )
}