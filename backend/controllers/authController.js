// authController.js

// Import necessary modules
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js'; // Assuming you have a User model defined

// Signup route controller
export const signupUser = async (req, res) => {
    try {
        const { firstName, lastName, username, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            gender
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
