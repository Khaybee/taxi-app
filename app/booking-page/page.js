import OpenStreetMap from "../components/OpenStreetMap";
import LoggedInNav from "../components/loggedInNav";
import Map from "./components/map"
import BookedRide from "./components/book"
import DisplayLocations from "../choose-option/components/show-locations"

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