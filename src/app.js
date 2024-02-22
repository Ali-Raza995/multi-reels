import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// API routes Import 

import userRoutes from "./routes/user.routes.js"


// API routes declaration

app.use("/api/users", userRoutes)

// http://localhost:8000/api/v1/users/register

export default app