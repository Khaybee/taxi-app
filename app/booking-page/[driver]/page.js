import dynamic from "next/dynamic";
import getAuthToken from "../../utils/getAuthToken"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default async function BookedRide({ params }) {
  const driver = params.driver;

  const formData = { driver }

  try {
     const authToken = getAuthToken();
     const res = await fetch(`${apiUrl}/api/get-drivers`, {
       method: "POST",
       body: JSON.stringify(formData),
       cache: "no-store",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${authToken}`,
       },
     });

     if (!res.ok) {
       throw new Error("Failed to fetch data");
     }
     const data = await res.json();

     console.log(data);
   } catch (error) {
     console.error("An error occurred: ", error);
   }

  return (
    <>

      <div className=" container w-100 ">
       
      </div>

    </>
  );
}
