import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/imagify`
    );
    console.log(`DB CONNECTED AT : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("DB CONNECTION FAILED !");
    process.exit(1);
  }
};

export default connectDB;
