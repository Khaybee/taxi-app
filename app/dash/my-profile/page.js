
import Image from "next/image";
import LoggedInNav from "../../components/loggedInNav";
import ProfileDetails from "./components/profile"
const apiUrl = process.env.NEXT_PUBLIC_API_URL
import { headers } from 'next/headers'
import { getServerSession } from "next-auth/next";


const MyProfile = async () => {

  let result;
  let count;
  const session = await getServerSession()
  const sessionEmail = session.user.email

  try {
    const headersInstance = headers()
    const authorization = headersInstance.get('authorization')
    const res = await fetch(`${apiUrl}/api/get-profile`, {
      method: "POST",
      cache: "no-store",
      headers: { authorization },
      body: JSON.stringify({sessionEmail})
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    
    result = data.data.user
    count = data.data.count_rides

    

  } catch (error) {
    console.error("An error occurred: ", error);
  }

  return (
    <>
      <div className=" bg-body-tertiary" style={{ height: "100dvh" }}>
        <LoggedInNav />

        <ProfileDetails user={result} rideCount={count}/>
      </div>

    </>
  );
};

export default MyProfile;
