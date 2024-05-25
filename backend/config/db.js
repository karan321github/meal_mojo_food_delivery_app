import mongoose from "mongoose";

 const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ks867850:Singh8750%40@cluster0.glcvgpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB is connected to: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  } 
};

export default connectDB;
