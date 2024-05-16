import { pool } from "../../../lib/db";
import { NextResponse } from "next/server";
import { genToken, generateRandomPrice } from "../../utils/helperFunctions";
import getLongLat from '../utils/geocoder';


export async function POST(req) {

     try {
          const data = await req.json();

          // get the users credential from the request
          const { pickup, destination } = data;

          if (!pickup || !destination) return NextResponse.json({ message: "Please enter address", status: 400, success: false })

          const pickupResult = await getLongLat(pickup)
          const destResult = await getLongLat(destination)

          if (!pickupResult || !destResult) {
               console.log("Address not found");
               return NextResponse.json({
                    message: " Invalid address",
                    status: 400,
                    success: false,
               });
          }

          const values = [pickupResult, destResult]

          // console.log(values);

          const [companies] = await pool.promise().query("SELECT * FROM company");

          let fares = [];

          for (const company of companies) {
               const fare = await generateRandomPrice();

               fares.push(fare)


          }
          fares.sort((a, b) => a - b);

          // const companiesWithPrice = companies.map(driver => ({
          //      ...driver,
          //      price: 
          // }));


          // console.log(fares);

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