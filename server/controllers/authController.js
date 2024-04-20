import User from '../models/user.js'
import { hashPassword, comparePassword } from '../helpers/auth.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config';


// Register User Endpoint
export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        if (!name) return res.json({ error: "Name is required" });
        if (!email) return res.json({ error: "Email is required" });
        if (!password) return res.json({ error: "Password is required" });
        if (password.length < 6) return res.json({ error: "Password must be at least 6 characters" });
        if (await User.findOne({ email })) return res.json({ error: "Email already exists" });


        // Hashes the password
        const hashedPassword = await hashPassword(password)

        const user = await new User({

            name,
            email,
            password: hashedPassword
        })
        user.save()

        return res.json(user)


    }
    catch (error) {
        console.log(error)
    }
}

// Login User Endpoint
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: "User not found" })
        }

        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if (!match) {
            res.json({ error: "Invalid credentials" })
        }

    }
    catch (error) {
        console.log(error)
    }
}

export const getProfile = async (req, res) => {
    const { token } = req.cookies;
    if (token) {

        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    }

    else {
        res.json({ error: "Unauthorized" })
    }



}