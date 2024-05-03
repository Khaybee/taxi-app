import mongoose, { Schema } from "mongoose";

const users = new Schema(
     {
          firstname: String,
          lastname: String,
          email: String
     }
)