// Function to connect to the database
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI},         useNewUrlParser: true,
        useCreateIndex: true
`)
        console.log(`Mongoose connection started on ${connectionInstance.connection.host}`)


    } catch (error) {
        console.error("Error connecting to database", error)
        process.exit(1);
    }

}

export default connectDB