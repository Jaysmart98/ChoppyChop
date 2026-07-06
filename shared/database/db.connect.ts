import mongoose from "mongoose";

const connect = async () => {
  const uri = process.env.MONGOURI;

  if (!uri) {
    throw new Error("Please define the MONGOURI environment variable inside .env.local");
  }

  try {
    if (mongoose.connection.readyState >= 1) return;

    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export default connect;