import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, checkEmailLogin, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getLongLat from '../utils/geocoder';
import { getServerSession } from "next-auth/next";
 


export async function POST(req) {

     try {
          const data = await req.json();

          // get the users credential from the request
          const { sessionEmail } = data;

          const [userResult] = await pool.promise().query("SELECT * from user where email = ?", [sessionEmail])

          if (!userResult | userResult.length === 0) {
            return NextResponse.json({
              success: false,
              message: "User not found",
              status: 404,
            });
          }
          
        const user_id = userResult[0].id;
        const firstName = userResult[0].fullName.split(" ")[0];
        const lastName = userResult[0].fullName.split(" ")[1];
        const addCountry = "Nigeria";

          const [countResult] = await pool.promise().query("SELECT COUNT(*) AS count FROM ride WHERE user_id = ?", [user_id]);
          const count_rides = countResult[0].count;
          
          return NextResponse.json({
               success: true,
               status: 200,
               message: "ride booked",
               data: { user: {
                    ...userResult[0],
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