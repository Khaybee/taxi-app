
import { useRouter } from 'next/navigation';
import { useAppContext } from './context';
import { useContext } from 'react';

const InputAddress = async (props) => {

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
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
          return data
     } catch (error) {
         
          console.error('An error occurred: ', error)
     }
     
 

     return (
<>
<h1>Hello</h1>
</>
     )
}