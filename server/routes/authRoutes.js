import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, getProfile, getUser } from '../controllers/authController.js';
const authRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
authRouter.use(cors({
    origin: "https://ezfinancials-s6e4.vercel.app",
    // Secure in production

}));

// API - Routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/profile', getProfile);
authRouter.get('/user', getUser);

export default authRouter;