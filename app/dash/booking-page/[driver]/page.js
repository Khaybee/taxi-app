import dynamic from "next/dynamic";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
import { headers } from 'next/headers'
import Booked from '../components/book'
import LoggedInNav from "../../../components/loggedInNav";
import DisplayLocations from "../../enter-address/component/show-locations";


export default async function BookedRide({ params }) {
  const driver = params.driver;

  const formData = {
    driver: driver
   }
let result;
  try {
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization')
    const res = await fetch(`${apiUrl}/api/booked-page`, {
      method: "POST",
      body: JSON.stringify(formData),
      cache: "no-store",
      headers: { authorization }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    console.log(data);
    
    result = data.data

  } catch (error) {
    console.error("An error occurred: ", error);
  }

  return (
    <>

               <LoggedInNav />
               {/* <DisplayLocations /> */}
      <Booked data={result}/>
      {/* <Booked data={result} fare={price}/> */}

    </>
  );
}
