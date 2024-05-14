import { NextResponse } from "next/server";

export default async function getLongLat(address) {
     try{
          
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${process.env.GEOCODER_API_KEY}&limit=1&countrycode=NG`, {
               method: 'GET',
          })

          if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          // console.log(JSON.stringify(data, null, 2));
         
          return data.results[0].geometry
     } catch (err) {
          console.error('An error occurred: ', err)
          return NextResponse.json({
               success: false,
               message: `Something went wrong: ${err}`,
               status: 500,
          });
        
     }
}

// headers: {
//      "Content-Type": "application/json",
    
// }