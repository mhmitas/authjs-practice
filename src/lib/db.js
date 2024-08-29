import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("🍃 Mongodb connected")
    } catch (error) {
        console.error(`DB connection Error:`, error);
    }
}