import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import ApiResponse from "../utils/ApiResponse.js";

export const register = asyncHandler(async (req, res) => {

    // Get details from user
    const { fullName, username, email, password } = req.body
    console.log("Full name: " + fullName)
    const isEmpty = [fullName, username, email, password]?.some((fields) => fields?.trim() === ""
    )

    // Validating 

    if (isEmpty) {
        throw new ApiError(400, "All fields must are required")
    }

    // Checking if the user is already existing

    const existingUser = await User.findOne({ email })
    if (existingUser) {
        throw new ApiError(409, "User Already existing")
    }

    const createdUser = await User.create({
        fullName,
        email,
        username,
        password
    })

    if (createdUser) {
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User created Successfully")
        )
    }

    throw new ApiError(500, "Server Issues")

})