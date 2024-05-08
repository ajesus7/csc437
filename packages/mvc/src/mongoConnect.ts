// src/mongoConnect.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set("debug", true);
dotenv.config();

function getMongoURI(dbname: string): string {
  const { MONGO_USER, MONGO_PWD, MONGO_CLUSTER } = process.env;
  if (MONGO_USER && MONGO_PWD && MONGO_CLUSTER) {
    console.log(
      "Connecting to MongoDB at",
      `mongodb+srv://${MONGO_USER}:<password>@${MONGO_CLUSTER}/${dbname}`
    );
    return `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_CLUSTER}/${dbname}?retryWrites=true&w=majority&appName=Vibing`;
  }
  // Fallback connection string or throw an error
  throw new Error("Database configuration is incomplete in .env");
}

export function connect(dbname: string) {
  mongoose
    .connect(getMongoURI(dbname))
    .then(() => console.log(`Successfully connected to database: ${dbname}`))
    .catch((error) => console.error("Database connection failed:", error));
}