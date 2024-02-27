import mongoose from "mongoose";

const connectMongo = async () => {
     try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB");
     } catch (error) {
        console.log("Failed to connect to mongoDB", error.message)
     }
}

export default connectMongo;