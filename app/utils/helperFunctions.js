const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const OTP = require("otp-generator");

exports.hash = () => crypto.randomBytes(64).toString("hex");
// const hash = () => crypto.randomBytes(64).toString("hex");

// console.log(hash(64));

exports.authpassword = (salt, password) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.JWT_SECRET)
    .digest("hex");
};

exports.genToken = (userid) =>
  jwt.sign({ id: userid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
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
