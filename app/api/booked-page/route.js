import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, checkEmailLogin, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getLongLat from '../utils/geocoder';
import { getServerSession } from "next-auth/next";




export async function POST(req) {
     // export async function POST(req) {

     try {

          // const session = await getSession({ req });
          // if (session) {
          //      console.log( session.user);
          //    } else {
          //      console.log("Unauthorized");
          //    }

          const data = await req.json();

          // get the users credential from the request
          const { driver } = data;

          if ( !driver) return NextResponse.json({ message: "Please choose a driver", status: 400, success: false })

          const [selectedDriver] = await pool.promise().query("SELECT * FROM driver where id = ?", [driver]);

          // console.log(selectedDriver);

          // query = "INSERT INTO `ride` (`user_id`, `driver_id`, `destination`, `pickup`, `fare`, `distance`) VALUES (?,?,?,?,?,?)"
          // query = "INSERT INTO `ride` (`driver_id`, `destination`, `pickup`, `fare`) VALUES (?,?,?,?)"

          // const result = await pool.promise().query(query, [driver, destination, pickup, rideFare])
          
          return NextResponse.json({
               success: true,
               status: 200,
               message: "Address gotten",
               data: selectedDriver ,
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}