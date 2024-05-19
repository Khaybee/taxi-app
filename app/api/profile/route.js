import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, checkEmailLogin, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getLongLat from '../utils/geocoder';
import { getServerSession } from "next-auth/next";


// export async function POST(req) {

//      try {

//           let userEmail;
//           const session = await getServerSession({ req });
//           if (session) {

//                userEmail = session.user.email;
//              } else {
//                console.log("Unauthorized");
               
//              }

//           const data = await req.json();

//           // get the users credential from the request
//           const {firstName, lastName, email, address, phone, state } = data;

//           if (!firstName && !lastName && !email && !address && !phone && state ) return NextResponse.json({ message: "Please enter at least one field to edit", status: 400, success: false })

//           const [userResult] = await pool.promise().query("SELECT * from user where email = ?", [userEmail])

//           if (!userResult || userResult.length === 0) return NextResponse.json({message: "Unauthorized", status: 400, success: false})

//                const fullName = [firstName, lastName].join(" ")

//          const query = "UPDATE user set fullname = ?, email = ?, address = ?, city = ?, phone = ? where email = ?"

//           const result = await pool.promise().query(query, [fullName, email, address, state, phone, userEmail])
          
//           return NextResponse.json({
//                success: true,
//                status: 200,
//                message: "Profile Updated",
//                data: result.insertId
//           });
//      } catch (err) {
//           return NextResponse.json({
//                success: false,
//                message: `Something went wrong: ${err.message}`,
//                status: 500,
//           });
//      }
// }

export async function POST(req) {
     try {
         let userEmail;
         const session = await getServerSession({ req });
         if (session) {
             userEmail = session.user.email;
         } else {
             console.log("Unauthorized");
             return NextResponse.json({ message: "Unauthorized", status: 401, success: false });
         }
 
         const data = await req.json();
         const { firstName, lastName, email, address, phone, city } = data;
 
         if (!firstName && !lastName && !email && !address && !phone && !city) {
             return NextResponse.json({ message: "Please enter at least one field to edit", status: 400, success: false });
         }
 
         const [userResult] = await pool.promise().query("SELECT * FROM user WHERE email = ?", [userEmail]);
 
         if (!userResult || userResult.length === 0) {
             return NextResponse.json({ message: "Unauthorized", status: 401, success: false });
         }
 
         let fullName = userResult[0].fullname;
         if (firstName || lastName) {
             fullName = [firstName || userResult[0].firstName, lastName || userResult[0].lastName].join(" ");
         }
 
         const fieldsToUpdate = {};
         if (fullName) fieldsToUpdate.fullname = fullName;
         if (email) fieldsToUpdate.email = email;
         if (address) fieldsToUpdate.address = address;
         if (city) fieldsToUpdate.city = city;
         if (phone) fieldsToUpdate.phone = phone;
 
         const fieldKeys = Object.keys(fieldsToUpdate);
         const fieldValues = Object.values(fieldsToUpdate);
         const setClause = fieldKeys.map(key => `${key} = ?`).join(", ");
 
         const query = `UPDATE user SET ${setClause} WHERE email = ?`;

         fieldValues.push(userEmail);
 
         const result = await pool.promise().query(query, fieldValues);
 
         return NextResponse.json({
             success: true,
             status: 200,
             message: "Profile Updated",
             data: result[0].insertId
         });
     } catch (err) {
         return NextResponse.json({
             success: false,
             message: `Something went wrong: ${err.message}`,
             status: 500,
         });
     }
 }
 


export async function GET(req) {

     try {
          let userEmail;
          const session = await getServerSession({ req });
          console.log(session);
          if (session) {
               
               userEmail = session.user.email;
             } else {
               console.log("Unauthorized");
               
             }
             const me = "popoolad14@gmail.com"

          // const [userResult] = await pool.promise().query("SELECT * from user where email = ?", [userEmail])
          const [userResult] = await pool.promise().query("SELECT * from user where email = ?", [me])

          const user = userResult[0];

          if (!user) {
            return NextResponse.json({
              success: false,
              message: "User not found",
              status: 404,
            });
          }

          const user_id = user.id
          const firstName = user.fullName.split(" ")[0]
          const lastName  = user.fullName.split(" ")[1]

          const addCountry = "Nigeria"

          const [countResult] = await pool.promise().query("SELECT COUNT(*) AS count FROM ride WHERE user_id = ?", [user_id]);
          const count_rides = countResult[0].count;
          
          return NextResponse.json({
               success: true,
               status: 200,
               message: "ride booked",
               data: { user: {
                    ...user,
                    firstName,
                    lastName,
                    addCountry
                }, count_rides: count_rides}
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}