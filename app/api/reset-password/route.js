// import { pool } from "@/lib/db";
import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { checkEmailLogin, updateLogin} from "../utils/query";
import {authpassword, hash} from "../../utils/helperFunctions";


export async function POST(req) {
     
try {

     const data = await req.json();

     const { email, password } = data;
 
     // generate a salt value using the hash function
     const salt = hash();
 
     // handle no password inputed
     if (!password) return NextResponse.json({ message: "Input a new password", status: 401, success: false,})
      
     //hash the new password
     const hashedPassword = authpassword(salt, password);
 
     const [checkEmail] = await pool.promise().query(checkEmailLogin, [email]);
 
     if (!checkEmail || checkEmail[0].length === 0) return NextResponse.json({ message: "Account does not exist. Signup to create an account.", status: 401, success: false,})
  
 
     // update password and salt using query
     const updatePWD = await pool.promise().query(updateLogin, [hashedPassword, salt, email]);
 
     // send successful reset message to client side
     return NextResponse.json({
          success: true,
          status: 200,
          message: "Password has been reset successfully. Back to Login",
     });
     
   }  catch (err) {
     return NextResponse.json({
          success: false,
          message: `Something went wrong: ${err.message}`,
          status: 500,
     });
}
} 