import express from 'express';
import cors from 'cors';
import { addIncome, deleteIncome, getAllIncomes, getSingleIncome } from '../controllers/incomeController.js';
import authenticateToken from '../middleware/authenticate.js';
const incomeRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
incomeRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true

}));

// API - Routes
incomeRouter.get('/incomes', authenticateToken, getAllIncomes);
incomeRouter.post('/income/add', authenticateToken, addIncome);
incomeRouter.delete('/income/delete/:id', authenticateToken, deleteIncome);
incomeRouter.get('/income/:id', authenticateToken, getSingleIncome);


export default incomeRouter;