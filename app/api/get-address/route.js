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

          const [companies] = await pool.promise().query("SELECT * FROM company");

          let companyFares = [];


          for (let i = 0; i < companies.length; i++) {
               const fare = await generateRandomPrice();
               companyFares.push({ companyId: i + 1, fare });
          }

          companyFares.sort((a, b) => a.fare - b.fare);

          console.log(companyFares);

          const companiesWithFares = companies.map((company, index) => ({
               ...company,
               id: index + 1, // Adjust company ID to start from 1
               fare: companyFares[index].fare
          }));

          // Sort companies by their original order
          companiesWithFares.sort((a, b) => a.id - b.id);


          return NextResponse.json({
               success: true,
               status: 200,
               message: "Address gotten",
               data: { companiesWithFares, values },
          });
     } catch (err) {
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err.message}`,
               status: 500,
          });
     }
}