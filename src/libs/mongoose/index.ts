export * from "./modules";

import mongoose from "mongoose";

let isMongoConnected = false;

export const connectToMongo = async () => {
  mongoose.set("strictQuery", true);

  if (isMongoConnected) return;

  const mongoUri = process.env.DB_URI!;
  const mongoDbName = process.env.DB_NAME!;

  try {
    await mongoose.connect(mongoUri, {
      dbName: mongoDbName,
    });

    isMongoConnected = true;
  } catch (error) {
    console.log(error);
  }
};
