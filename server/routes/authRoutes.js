import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, getProfile, getUser } from '../controllers/authController.js';
import { orginOptions } from '../middleware/orgin.js';
const authRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
authRouter.use(cors({
    origin: orginOptions,
    credentials: true,
    // Secure in production

}));

// API - Routes
authRouter.post('/api/register', registerUser);
authRouter.post('/api/login', loginUser);
authRouter.get('/api/profile', getProfile);
authRouter.get('/api/user', getUser);

export default authRouter;