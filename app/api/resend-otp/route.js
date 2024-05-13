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
                    message: "Email not found",
                    status: 401,
                    success: false,
               });

          const newOtp = generateOTP();

          const [checkEmail] = await pool.promise().query(checkEmailLogin, [email]);

          if (!checkEmail) return NextResponse.json({ message: "Invalid Email", status: 401, success: false,})
        

          const result = await pool.promise().query(updateOTP, [newOtp, email]);
          // use the function created for running a query to insert the credentials gotten from the request into the database

          console.log(checkEmail);
          const firstName = checkEmail[0].fullName.split(' ')[0];
          const otp = newOtp;

          const authToken = genToken(checkEmail[0].id);

          console.log(authToken);

          const emailContent = `<div style="margin-left: 15px;">
                                   <h1><b>Hello ${firstName} 👋,</b></h1>
                                   <p>Verify your email using the code below,
                                        </p>
                                   <p style='display: inline-block; padding: 10px 20px; font-size: 30px; color: #000; font-weight: 700; background-color: #ffc000; text-decoration: none; border-radius: 5px; '> ${otp}</p>
                                   <p>This code will remain valid for 1 day. If you have not verified your email address by then, you will have to
                                        create another account.</p>
                               </div>`;

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
               message: "Email Resent",
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
