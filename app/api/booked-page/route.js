import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, checkEmailLogin, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getLongLat from '../utils/geocoder';




export async function POST(req) {
     // export async function POST(req) {

     try {

          const session = await getSession({ req });
          if (session) {
               console.log( session.user);
             } else {
               console.log("Unauthorized");
             }

          const data = await req.json();

          // get the users credential from the request
          const { pickup, destination, driver, rideFare } = data;

          if (!pickup || !destination || !driver || !rideFare || !selectedCompany) return NextResponse.json({ message: "Please enter address", status: 400, success: false })

          const [selectedDriver] = await pool.promise().query("SELECT * FROM driver where id = ?");



          console.log(selectedDriver);

          // query = "INSERT INTO `ride` (`user_id`, `driver_id`, `destination`, `pickup`, `fare`, `distance`) VALUES (?,?,?,?,?,?)"
          query = "INSERT INTO `ride` (`driver_id`, `destination`, `pickup`, `fare`) VALUES (?,?,?,?)"

          const result = await pool.promise().query(query, [driver, destination, pickup, rideFare])
          
          return NextResponse.json({
               success: true,
               status: 200,
               message: "Address gotten",
               data: { selectedDriver, rideFare },
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}