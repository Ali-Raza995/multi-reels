import mongoose from "mongoose";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";


dotenv.config({ path: './env' })
const PORT = process.env.PORT || 8000

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server listening on port " + PORT)
        })
    })
    .catch((error) => {
        console.log("Error in connectDB", error);

    })