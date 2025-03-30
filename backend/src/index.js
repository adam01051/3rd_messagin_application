import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

const app = express();

dotenv.config();
 
const PORT = process.env.Port;
 
   
app.use("/api/auth", authRoutes);

app.listen(PORT, () => 
{ 
    connectDB();
    console.log("server is running in PORT port" +PORT);
})