// import { pool } from "@/lib/db";
import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { authpassword, hash, generateOTP, genToken, } from "../../utils/helperFunctions";
import { sendMail } from "../../utils/sendEmail";
import { saveNewSubs, subExist } from "../utils/query"
import fs from 'fs'
import path from 'path'

     export async function POST(req){



     try {
         

          const email = req.body.email;

          const checkEmail = await runQuery(connection, subExist, [email])

          if (checkEmail.length !== 0) {

               const htmlContent = loadTemplate('existingSubscriber');
               // const htmlContent = loadTemplate('welcomeNewsLetter');
               const otheroptions = {
                    from: '"Rapid Clean Laundry" <kharchiee@outlook.com>',
                    to: email,
                    subject: "You Are Already Subscribed to Rapid Clean Newsletter🎉",
                    html: htmlContent
               };

               await sendMail(otheroptions);

               return res.status(201).json({
                    status: true,
                    message: "Subsciber Exists",
               });
          }

          const newsLetter = await runQuery(connection, saveNewSubs, [
               email
          ]);

          const htmlContent = loadTemplate('welcomeNewsLetter');

          const options = {
               from: '"Rapid Clean Laundry" <kharchiee@outlook.com>',
               to: email,
               subject: "You're in!🎉",
               html: htmlContent
          };

          await sendMail(options);

          return res.status(201).json({
               status: true,
               message: "Subsciber Saved",
          });
     } catch (err) {
          return next(err);
     }

}