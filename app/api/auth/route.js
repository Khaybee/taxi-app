import { pool } from "@/lib/db";
import { NextResponse } from "next/server";
import { insertSignup, updateVerify, checkotp, checkEmailLogin } from "../utils/query";
import { authpassword, hash, generateOTP, genToken, } from "../../utils/helperFunctions";
import { sendMail } from "../../utils/sendEmail";
import fs from "fs";
import path from "path";
import { log } from "console";



// const readEmailTemplate = (templateName) => {
//     const emailTemplatePath = path.join(
//         __dirname,
//         "utils",
//         `${templateName}.html`
//     );
//     const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");
//     return emailTemplate;
// };

const readEmailTemplate = (templateName) => {
    // Construct the full path to the email template
    const emailTemplatePath = path.join(
        process.cwd(),
        "../",
        "utils",
        `${templateName}.html`
    );
    console.log("Current __dirname:", __dirname);
    console.log("emailPath", emailTemplatePath);
    // Check if the file exists before attempting to read it
    if (!fs.existsSync(emailTemplatePath)) {
        throw new Error(`File not found: ${emailTemplatePath}`);
    }

    // Read the file content if it exists
    return fs.readFileSync(emailTemplatePath, "utf-8");
};




export async function POST(req) {
    try {
        const data = await req.json();

        // get the users credential from the request
        const { fullName, password, email } = data;

        // create a salt using the hash function created in the helper file
        const salt = hash();

        console.log(data);

        // create a variable that holds regex form of an email
        const validEmailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // check that the email entered corresponds with the regex format set above
        if (!validEmailRegex.test(email))
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );

        // check that the password entered meets the requirements
        if (
            !(
                password.length >= 6 &&
                /[A-Z]/.test(password) &&
                /[a-z]/.test(password) &&
                /[0-9]/.test(password)
            )
        )
            return NextResponse.json(
                { error: "Password does not meet the requirements" },
                { status: 401 }
            );

        // hash the password entered using the function created to hash
        const hashedPassword = authpassword(salt, password);
      

        const [checkUser] = await pool.promise().query(checkEmailLogin, [email]);

        

        console.log(checkUser);
        // Validate the query result
        // if (checkUser.length > 0) {
        //   return NextResponse.json(
        //     { error: "User already exists..Login" },
        //     { status: 400 }
        //   );
        // }

        if (checkUser.isVerified === 0) {
            return NextResponse.json(
                { error: "Email already in use...verify your email" },
                { status: 400 }
            );
        }

        // create the otp using the generateotp() method
        const otp = generateOTP();

        // use the function created for running a query to insert the credentials gotten from the request into the database

        const records = [fullName, email, hashedPassword, salt, otp];

        const result = await pool.promise().query(insertSignup, records);

        // Read the email template
        // const emailTemplate = readEmailTemplate("verificationEmail");

        // console.log("i am here");

        // const firstName = fullName.split(" ")[0];

        // console.log("i passed here");

        // const emailContent = emailTemplate
        //     .replace("{{firstName}}", firstName)
        //     .replace("{{otp}}", otp);

        // console.log("i also passed here");

        // const options = {
        //     from: '"SaveDrive" <kharchiee@outlook.com>',
        //     to: email,
        //     subject: "Verify your email...",
        //     html: emailContent,
        // };

        // await sendMail(options);

        // send a successful message to the client side
        return NextResponse.json({ 
            success: true,
            status: 200 ,
             message: "Account created successfully" ,
        });
          
    } catch (err) {
        console.log(err);
        return NextResponse.json({ success: false, error: `Something went wrong: ${err}` }, { status: 500 })
    }
}
