import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/innovoDB");
    console.log(">>>DB Connect")
  } catch (error) {
    console.log(error);
  }
};
