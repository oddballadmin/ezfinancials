import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, getProfile } from '../controllers/authController.js';
const expenseRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
expenseRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true

}));

// API - Routes
expenseRouter.post('/register', registerUser);
expenseRouter.post('/login', loginUser);
expenseRouter.get('/profile', getProfile);

export default expenseRouter;