import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";


export async function POST(req) {

     try {

          let userEmail;
          const session = await getServerSession({ req });
          if (session) {

               userEmail = session.user.email;
             } else {
               console.log("Unauthorized");
               
             }

          const data = await req.json();

          // get the users credential from the request
          const {driver, pickup, destination, rideFare } = data;

          if (!driver || !pickup || !destination || !rideFare ) return NextResponse.json({ message: "Please enter address", status: 400, success: false })

          const [user_idResult] = await pool.promise().query("SELECT id from user where email = ?", [userEmail])

          const user_id = user_idResult[0].id

         const query = "INSERT INTO `ride` (`user_id`, `driver_id`, `destination`, `pickup`, `fare`) VALUES (?,?,?,?,?)"

          const result = await pool.promise().query(query, [user_id, driver, destination, pickup, rideFare])
          
          return NextResponse.json({
               success: true,
               status: 200,
               message: "ride booked",
               data: result,
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}