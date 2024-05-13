// import { pool } from "@/lib/db";
import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import {
  insertSignup,
  updateVerify,
  checkotp,
  checkEmailLogin,
} from "../utils/query";
import {
  authpassword,
  hash,
  generateOTP,
  genToken,
} from "../../utils/helperFunctions";
import { sendMail } from "../../utils/sendEmail";

export async function POST(req) {
  let checkUser;
  try {
    const data = await req.json();

    // get the users credential from the request
    const { fullName, password, email } = data;

    if (!fullName || !password || !email)
      return NextResponse.json({
        message: "Fields cannot be empty",
        status: 401,
        success: false,
      });

    // create a salt using the hash function created in the helper file
    const salt = hash();

    console.log(data);

    // create a variable that holds regex form of an email
    const validEmailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // check that the email entered corresponds with the regex format set above
    if (!validEmailRegex.test(email))
      return NextResponse.json({
        message: "Invalid email format",
        status: 400,
        success: false,
      });

    // check that the password entered meets the requirements
    if (
      !(
        password.length >= 6 &&
        /[A-Za-z]/.test(password) &&
        /[0-9]/.test(password)
      )
    )
      return NextResponse.json({
        message: "Password does not meet the requirements",
        status: 401,
        success: false,
      });

    // hash the password entered using the function created to hash
    const hashedPassword = authpassword(salt, password);

    checkUser = await pool.promise().query(checkEmailLogin, [email]);

    console.log(checkUser);

    // create the otp using the generateotp() method
    const otp = generateOTP();

    // use the function created for running a query to insert the credentials gotten from the request into the database

    const records = [fullName, email, hashedPassword, salt, otp];

    const result = await pool.promise().query(insertSignup, records);

    const authToken = genToken(result.id);

    const firstName = fullName.split(" ")[0];

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

    // send a successful message to the client side
    return NextResponse.json({
      success: true,
      status: 200,
      message: "Account created successfully",
    });
  } catch (err) {
    console.log(checkUser);
    if (err.errno === 1062 && err.sqlMessage.includes("email")) {
      if (checkUser.isVerified === true) {
        return NextResponse.json({
          success: false,
          message: `Account with email exist...Login`,
          status: 400,
        });
      } else {
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
          to: checkUser.email,
          subject: "Verify your email...",
          html: emailContent,
        };

        await sendMail(options);
        return NextResponse.json({
          success: true,
          message: `Email already in use, verify your email...`,
          status: 400,
          data: authToken
        });
        //direct user to resend verification email
      }
    } else {
      // handle errors using sql error message
      return NextResponse.json({
        success: false,
        message: `Something went wrong: ${err.message}`,
        status: 500,
      });
    }
  }
}


