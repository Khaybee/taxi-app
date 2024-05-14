import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, } from "../utils/query";
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


          console.log(checkUser);

          if (!checkUser || checkUser === 0) return NextResponse.json({ message: "Unauthorized user", status: 401, success: false })

          const data = await req.json();

          // get the users credential from the request
          const { companyId } = data;

          if (!companyId) return NextResponse.json({ message: "No company id returned", status: 400, success: false })


         const query = "select * from driver where company = ?"

         const [getDrivers] = await pool.promise().query(query, [companyId]);

         if (!getDrivers || getDrivers === 0) return NextResponse.json({ message: "No drivers available at the moment", status: 400, success: false })


          return NextResponse.json({
               success: true,
               status: 200,
               message: "Drivers gotten",
               data: getDrivers,
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}