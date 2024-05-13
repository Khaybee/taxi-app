import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp,} from "../utils/query";
import { genToken, } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function POST(req) {
     // export async function POST(req) {

     try {

          const headersList = headers()
          const bearerToken = headersList.get('authorization')

          console.log(bearerToken);

          const token = bearerToken.split(" ")[1]

          console.log(token);
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

          const data = await req.json();

          // get the users credential from the request
          const { otp } = data;

          if (!otp)
               return NextResponse.json({
                    message: "Fields cannot be empty",
                    status: 401,
                    success: false,
               });

          // run a query to confirm the email enetered exists in the database

          const [checkPin] = await pool.promise().query(checkotp, [decoded.id]);

          console.log(checkPin);


          console.log(checkPin[0].otp);
          if (
               !checkPin ||
               checkPin.length === 0 ||
               checkPin[0].otp !== parseInt(otp)
          ) return NextResponse.json({
               message: "Email Verification Failed. Invalid pin",
               status: 401,
               success: false,
          });

          const isVerified = true;

          const updateVerification = await pool.promise().query(updateVerify, [isVerified, decoded.id]);

          // generate a token for the user using the genToken function created in the helper file
          const authToken = genToken(checkPin[0].id);

          console.log("Login successful");

          return NextResponse.json({
               success: true,
               status: 200,
               message: "Email Verification successful.",
               data: { isVerified: isVerified, authToken: authToken },
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}