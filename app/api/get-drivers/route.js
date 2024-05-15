import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getAddress from '../utils/reverse-geocoder'



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

          // console.log(decoded);
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
          const { id, price, address } = data;

          if (!id) return NextResponse.json({ message: "No company id returned", status: 400, success: false })

               // console.log(address);
               // console.log(address[0].formatted.split(",")[0]);
               // console.log(address[1].formatted.split(",")[0]);

               const addy = {
                    pickupFrom: address[0].formatted.split(",")[0],
                    dropAt: address[1].formatted.split(",")[0]
               }

               console.log(addy);


         const query = "select * from driver where company = ?"

         const [getDrivers] = await pool.promise().query(query, [id]);

         if (!getDrivers || getDrivers === 0) return NextResponse.json({ message: "No drivers available at the moment", status: 400, success: false })

          // Function to generate a random number between 2 and 20
          const getRandomMinutes = () => Math.floor(Math.random() * (20 - 2 + 1)) + 2;

          const driversWithRawaittndomTime = getDrivers.map(driver => ({
               ...driver,
               waitTime: getRandomMinutes(),
               price: price
          }));


          return NextResponse.json({
               success: true,
               status: 200,
               message: "Drivers gotten",
               data: {driversWithRawaittndomTime, addy}
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}