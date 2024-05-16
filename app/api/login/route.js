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
       const { password, email } = data;
   
       if (!password || !email)
         return NextResponse.json({
           message: "Fields cannot be empty",
           status: 401,
           success: false,
         });
   
       // run a query to confirm the email enetered exists in the database
   
       [checkUser] = await pool.promise().query(checkEmailLogin, [email]);
   
       console.log(checkUser);

   
       if (checkUser[0].length === 0)
         return NextResponse.json({
          message: "Account does not exist. Signup",
           status: 400,
           success: false,
         });
   
       if (checkUser[0].isVerified === 0)
         return NextResponse.json({
          message: "Please verify your email",
           status: 401,
           success: false,
         });
   
       // retrieve the salt stored in the database
       const salt = checkUser[0].salt;
   
       // hash the password entered during login using the salt retrieved from database
       const hashedPassword = authpassword(salt, password);

     //   console.log(checkUser[0].password);
     //   console.log(hashedPassword);
   
       // check that the hashed password in the previuos line of code is identical to the one stored in the database
       if (checkUser[0].password != hashedPassword)
       
         return NextResponse.json({
           message: "Wrong Password",
           status: 400,
           success: false,
         });
   
       // generate a token for the user using the genToken function created in the helper file
       const authToken = genToken(checkUser[0].id);

       console.log(checkUser[0].id);

   
       console.log("Login successful");
   
       // send a successful login message to the client side with the authentication token
   
       return NextResponse.json({
         success: true,
         status: 200,
         message: "Login successful",
         data: authToken,
       });
     } catch (err) {
       return NextResponse.json({
         success: false,
         message: `Something went wrong: ${err.message}`,
         status: 500,
       });
     }
   }