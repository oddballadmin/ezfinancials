import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, getProfile, getUser } from '../controllers/authController.js';
const authRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
authRouter.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8001'],
    credentials: true

}));

// API - Routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/profile', getProfile);
authRouter.get('/user', getUser);

export default authRouter;