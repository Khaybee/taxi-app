
import Image from "next/image";
import LoggedInNav from "../../components/loggedInNav";
import MyRides from "./components/rides"
import { getServerSession } from "next-auth/next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL
import { headers } from 'next/headers'


const MyProfile = async () => {

     const session = await getServerSession()
     const sessionEmail = session.user.email
     let result;
  try {
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization')
    const res = await fetch(`${apiUrl}/api/get-rides`, {
      method: "POST",
      cache: "no-store",
      headers: { authorization },
      body: JSON.stringify({sessionEmail})
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    

    result = data.data
    
  } catch (error) {
    console.error("An error occurred: ", error);
  }

  return (
    <>
      <div className=" bg-body-tertiary" style={{ height: "100dvh" }}>
        <LoggedInNav />

     <MyRides data={result}/>
      </div>

    </>
  );
};

export default MyProfile;
