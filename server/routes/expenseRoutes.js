import express from 'express';
import cors from 'cors';
import protect from '../middleware/authenticate.js';
import { addExpense, deleteExpense, getAllExpenses, getSingleExpense } from '../controllers/expenseController.js';
const expenseRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
expenseRouter.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8001'],
    credentials: true

}));

// API - Routes
expenseRouter.get('/:id/expenses/', protect, getAllExpenses);
expenseRouter.post('/:id/expenses/add', protect, addExpense);
expenseRouter.delete('/:id/expenses/delete/:id', protect, deleteExpense);
expenseRouter.get('/:id/expenses/:id', protect, getSingleExpense);


export default expenseRouter;