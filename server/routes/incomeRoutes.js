import express from 'express';
import cors from 'cors';
import { addIncome, deleteIncome, getAllIncomes, getSingleIncome, updateIncome } from '../controllers/incomeController.js';
import protect from '../middleware/authenticate.js';
const incomeRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
incomeRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,

}));

// API - Routes

incomeRouter.get('/api/income', protect, getAllIncomes);
incomeRouter.post('/api/income/add', protect, addIncome);
incomeRouter.delete('/api/income/delete/:id', protect, deleteIncome);
incomeRouter.patch('/api/income/update/:id', protect, updateIncome);
incomeRouter.get('/api/income/:id', protect, getSingleIncome);


export default incomeRouter;