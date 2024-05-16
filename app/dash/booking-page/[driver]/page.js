import dynamic from "next/dynamic";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
import { headers } from 'next/headers'
import Booked from '../components/book'


export default async function BookedRide({ params }) {
  const driver = params.driver;

  const addressString = localStorage.getItem('valuesData')
 const pickup = localStorage.getItem('pickup')
 
  const rideFare = localStorage.getItem('rideFare')
  const destination = localStorage.getItem('destination')

  if (pickup) {
    try {
         company = JSON.parse(companiesData)
         address = JSON.parse(addressString)
    } catch (error) {
         console.error('Error parsing JSON:', error);
    }
}

  // const selectedCompany = localStorage.getItem('selectedCompany')

  const formData = {
    driver: driver,
    rideFare: rideFare,
    pickup: pickup,
    destination: destination,
   }

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

    let result;
    let price;
    
    if (data.success === true) {
      // const result = data.data.companies
       result = data.data.selectedDriver

       price = data.data.rideFare

 } else if (data.success === false) {
      setLoad(false)
      Swal.fire({
           icon: "error",
           title: "Something went wrong",
           text: data.message,
           showConfirmButton: false,
           timer: 2000
      });
 }
  } catch (error) {
    console.error("An error occurred: ", error);
  }

  return (
    <>
      <Booked data={result} fare={price}/>

    </>
  );
}
