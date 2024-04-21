import express from 'express';
import cors from 'cors';
import { getAllIncomes } from '../controllers/incomeController.js';
import authenticateToken from '../middleware/authenticate.js';
const incomeRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
incomeRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true

}));

// API - Routes
incomeRouter.get('/:id/incomes', authenticateToken, getAllIncomes);


export default incomeRouter;