import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to mongodb database: ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error is mongodb: ${error}`.bgRed.white);
  }
};

export default connectdb;
