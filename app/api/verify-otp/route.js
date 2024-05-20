import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, } from "../utils/query";

export async function POST(req) {
     // export async function POST(req) {

     try {

          const data = await req.json();

          // get the users credential from the request
          const { otp, email } = data;

          if (!otp || !email)
               return NextResponse.json({
                    message: "Fields cannot be empty",
                    status: 401,
                    success: false,
               });

          // run a query to confirm the email enetered exists in the database

          const [checkPin] = await pool.promise().query(checkotp, [email]);

               

          if (checkPin[0].otp !== parseInt(otp)) {
               return NextResponse.json({
                    message: "Email Verification Failed. Invalid pin",
                    status: 401,
                    success: false,
               });
          }

          const isVerified = true;
          const updateVerification = await pool.promise().query(updateVerify, [isVerified, email]);

          return NextResponse.json({
               success: true,
               status: 200,
               message: "Email Verification successful.",
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}