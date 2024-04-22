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
            const token = jwt.sign(
                { email: user.email, _id: user._id, name: user.name },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }  // You can configure the expiration as needed
            );

            res.cookie('token', token, {
                httpOnly: false,
                secure: false,  // Secure in production
            });
            return res.json({ message: "Logged in Successfully", token });

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

export const getUser = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    try {
        // Decoding the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Finding the user based on decoded data
        const user = await User.findById(decoded._id); // Ensure your token includes the user's ID as 'id'

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ name: user.name, email: user.email });
    } catch (error) {
        console.log('Error verifying token or fetching user:', error);
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ error: "Invalid token" });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ error: "Token has expired" });
        } else {
            return res.status(500).json({ error: "Server error" });
        }
    }
};