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

          const headersList = headers()
          const bearerToken = headersList.get('authorization')

          // console.log(bearerToken);

          let token;

          if (bearerToken) {
               token = bearerToken.split(" ")[1]
          }

          // console.log(token);
          if (!token) {
               return NextResponse.json({
                    message: "Unauthorized: Missing token",
                    status: 401,
                    success: false,
               });
          }

          const decoded = jwt.verify(token, process.env.JWT_SECRET);

          console.log(decoded);
          if (!decoded.id) {
               return NextResponse.json({
                    message: "Unauthorized: Invalid token",
                    status: 401,
                    success: false,
               });
          }

          const [checkUser] = await pool.promise().query(checkotp, [decoded.id]);


          // console.log(checkUser);

          if (!checkUser || checkUser === 0) return NextResponse.json({ message: "Unauthorized user", status: 401, success: false })

          const data = await req.json();

          // get the users credential from the request
          const { pickup, destination } = data;

          if (!pickup || !destination) return NextResponse.json({ message: "Please enter address", status: 400, success: false })


          // console.log(pickup);

          const pickupResult = await getLongLat(pickup)

          // console.log(pickupResult);

          const destResult = await getLongLat(destination)



          // console.log(destResult);

          if (!pickupResult || !destResult) {
               console.log("Address not found");
               return NextResponse.json({
                    message: " Invalid address",
                    status: 400,
                    success: false,
               });
          }

          const values = [pickupResult, destResult]

          // console.log(values);

          const [companies] = await pool.promise().query("SELECT * FROM company");


          let fares = [];

          for (const company of companies) {
               const fare = await generateRandomPrice();

               fares.push(fare)
          }


          fares.sort((a, b) => a - b);


          // console.log(fares);

          return NextResponse.json({
               success: true,
               status: 200,
               message: "Address gotten",
               data: { companies, fares, values },
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}