// import { pool } from "@/lib/db";
import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { checkEmailLogin, updateOTP,} from "../utils/query";
import {
     authpassword,
     hash,
     generateOTP,
     genToken,
} from "../../utils/helperFunctions";
import { sendMail } from "../../utils/sendEmail";

export async function POST(req) {
     try {
          const data = await req.json();

          const { email } = data;

          console.log(email);

          if (!email)
               return NextResponse.json({
                    message: "Please enter your email",
                    status: 401,
                    success: false,
               });

          const newOtp = generateOTP();

          const [checkEmail] = await pool.promise().query(checkEmailLogin, [email]);

          if (!checkEmail) return NextResponse.json({ message: "Invalid Email", status: 401, success: false,})
        

               console.log(checkEmail);
          const result = await pool.promise().query(updateOTP, [newOtp, email]);
          // use the function created for running a query to insert the credentials gotten from the request into the database

          console.log(result);

          const authToken = genToken(checkEmail[0].id);

          console.log(checkEmail);
          const firstName = checkEmail[0].fullName.split(' ')[0];
          const otp = newOtp;

          const emailContent = `<h1><b>Hello ${firstName} 👋,</b></h1>
               <p>Need a new Password?</p>
               <p>No worries. Use the code below to reset your SaveDrive account password</p>
               <p
                    style='display: inline-block; padding: 10px 20px; background-color: #ffc000; color: #ffffff; text-decoration: none; border-radius: 5px;'>${otp}</p>
               <p>This code will remain valid for 10 minutes. If you did not request this change, ignore this email and get back
                    to your already amazing day 😇.</p> <br><br>
               <a><b>Plot 255 Hassan T. Sanni Str. CBN Choos Estate, Apo Wumba</b></a>`;

          const options = {
               from: '"SaveDrive" <kharchiee@outlook.com>',
               to: email,
               subject: "Verify your email...",
               html: emailContent,
          };


          await sendMail(options);

          // send a successful message to the client sde
          return NextResponse.json({
               success: true,
               status: 200,
               message: "Check your email for verification pin.",
               data: authToken
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
};