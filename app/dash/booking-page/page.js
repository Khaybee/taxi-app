import LoggedInNav from "../../components/loggedInNav";


export default function BookPage() {
     return (
          <>
               <LoggedInNav />
               <DisplayLocations />

               {/* <OpenStreetMap /> */}

               <BookedRide />

          </>
     )
}