import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDatabase = async (): Promise<void> => {
  await mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_DB_NAME,
    serverSelectionTimeoutMS: 5000,
  });
  console.log("Conexión con MongoDB establecida.");
};

export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
};
