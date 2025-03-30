import mongoose from "mongoose";


export const connectDB = async () =>
{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
console.log(`Mongo db connecter: ${conn.connection.host}`);

    } catch (error) {
        console.log("Mongo db connection problem: ", error);
    }
};