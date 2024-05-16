import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { updateVerify, checkotp, checkEmailLogin, } from "../utils/query";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import { headers } from 'next/headers'
import jwt from 'jsonwebtoken'
import getLongLat from '../utils/geocoder';




export async function POST(req) {
     // export async function POST(req) {

     try {

          const data = await req.json();

          // get the users credential from the request
          const { pickup, destination, drivers_id,  } = data;

          if (!pickup || !destination || !drivers_id) return NextResponse.json({ message: "Please enter address", status: 400, success: false })



          const [drivers] = await pool.promise().query("SELECT * FROM driver where id = ?");



          return NextResponse.json({
               success: true,
               status: 200,
               message: "Address gotten",
               data: { companies, fares, values },
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}