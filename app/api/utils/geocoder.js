import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function getLongLat(address) {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${process.env.GEOCODER_API_KEY}&limit=1&countrycode=NG`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(JSON.stringify(data, null, 2));

    const coordinates = {
      ...data.results[0].geometry,
      formatted:data.results[0].formatted,
    };

    console.log(coordinates);
    return coordinates;
  } catch (err) {
    console.error("An error occurred: ", err);
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
