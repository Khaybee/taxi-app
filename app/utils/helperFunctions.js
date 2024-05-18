// const crypto = require("crypto");
import crypto from "crypto"
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"
// import { v4: uuidv4 }f from "uuid"
const { v4: uuidv4 } = require("uuid");
// const OTP = require("otp-generator");
import OTP from "otp-generator"

const JWT_SECRET="0e8ca0a3e388e37ff59ec01db5325f01cdf97616d93c7c25dd30fc2053ff6c2e"
const JWT_EXPIRES_IN="2d"

exports.hash = () => crypto.randomBytes(64).toString("hex");
// const hash = () => crypto.randomBytes(64).toString("hex");

// console.log(hash(64));

exports.authpassword = (salt, password) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.JWT_SECRET)
    .digest("hex");
};

exports.generateRandomPrice = async () => {
  const basePrice = Math.floor(Math.random() * (9000 - 2500 + 1) + 2500); // Random price between 3500 and 8000
  const roundedPrice = Math.round(basePrice / 100) * 100; // Round to the nearest 500
  return roundedPrice;
}

exports.genToken = (userid) =>
  jwt.sign({ id: userid }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

// Function to generate otp
exports.generateOTP = () => {
  const otp = OTP.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  return otp;
};

//  function to convert to PascalCase
exports.toPascalCase = (input) => {
  return input
    .split(" ") // Split the string into words based on spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and set the rest to lowercase
    .join(" "); // Join the words back together with spaces
};



const randRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomString = (length) => {
  const start = 0x41;
  const end = 0x5A;

  let r = "";

  for (let i = 0; i < length; i++) r += String.fromCharCode(randRange(start, end));

  return r;
}

// console.log(randomString(64));

// const now = new Date();

// const formatNow = now.toLocaleString().split(",")[0];

// console.log(formatNow);
