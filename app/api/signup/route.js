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
    const { name, password, email } = data;
    if (!name || !password || !email) {
      return NextResponse.json({ error: "Fields cannot be empty" }, { status: 400 });
    }

    // create a salt using the hash function created in the helper file
    const salt = hash();

    // create a variable that holds regex form of an email
    const validEmailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // check that the email entered corresponds with the regex format set above
    if (!validEmailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // check that the password entered meets the requirements
    if (!(password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)))
      return NextResponse.json({ error: "Password does not meet the requirements" }, { status: 401 });

    // hash the password entered using the function created to hash
    const hashedPassword = authpassword(salt, password);
    checkUser = await pool.promise().query(checkEmailLogin, [email]);

    if (checkUser[0].length !== 0) {
      return NextResponse.json({ status: 401 }, { error: "Email already exists" })
    }

    // create the otp using the generateotp() method
    const otp = generateOTP();

    // use the function created for running a query to insert the credentials gotten from the request into the database

    try {
      const records = [name, email, hashedPassword, salt, otp];
      const insertSignup2 = `INSERT INTO user (fullName, email, password, salt, otp) VALUES (?, ?, ?, ?, ?)`;
      const [result] = await pool.promise().query(insertSignup2, records);
      console.log('User inserted with ID:', result);
    } catch (error) {
      console.error('Error inserting user:', error);
    }

    const firstName = name.split(" ")[0];

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
    return NextResponse.json({ status: 200 }, { data: "Account created successfully" });

  } catch (err) {
    console.log(err);
  }
}


