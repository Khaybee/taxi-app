import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";




export async function POST(req) {

     try {

          const data = await req.json();

          // get the users credential from the request
          const { sessionEmail } = data;
          
          const [userResult] = await pool.promise().query("SELECT * from user where email = ?", [sessionEmail])

          if (!userResult) {
               return NextResponse.json({
                    success: false,
                    message: "User not found",
                    status: 404,
               });
          }

          const user_id = userResult[0].id

          const query = "SELECT `ride`.id, destination, pickup, fare, `ride`.created_at, `driver`.fullName, `company`.name from ride INNER JOIN driver ON `ride`.driver_id = `driver`.id INNER JOIN company ON `driver`.company = `company`.id where `ride`.user_id = ?;"

          const [getRide] = await pool.promise().query(query, [user_id]);

          // for (const ride of getRide){
          //      const formatDate = ride.created_at.toLocaleString()

          //      console.log(formatDate);

          //      const [date, time] = formatDate.split(", ");

          //      console.log(date);
          // console.log(time);
          // const formatTime = time.split(":")

          // console.log(formatTime);

          // const joinBack = [formatTime[0], formatTime[1]].join(":")

          // console.log(joinBack);
          // }

          for (const ride of getRide) {
               const createdAt = new Date(ride.created_at);
   
               // Format the date to DD/MM/YYYY
               const day = String(createdAt.getUTCDate()).padStart(2, '0');
               const month = String(createdAt.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
               const year = createdAt.getUTCFullYear();
               const formattedDate = `${day}/${month}/${year}`;
   
                    // Format the time to HH:MM AM/PM
            let hours = createdAt.getUTCHours();
            const minutes = String(createdAt.getUTCMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // The hour '0' should be '12'
            const formattedTime = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

   
               // Add formatted date and time to the ride object
               ride.formattedDate = formattedDate;
               ride.formattedTime = formattedTime;
           }

          //  console.log(getRide);

          return NextResponse.json({
               success: true,
               status: 200,
               message: "All Rides Fetched",
               data: getRide
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}