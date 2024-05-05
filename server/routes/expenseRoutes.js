import express from 'express';
import cors from 'cors';
import protect from '../middleware/authenticate.js';
import { addExpense, deleteExpense, getAllExpenses, getSingleExpense } from '../controllers/expenseController.js';
const expenseRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
expenseRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,

}));

// API - Routes
expenseRouter.get('/api/expenses/', protect, getAllExpenses);
expenseRouter.post('/api/expenses/add', protect, addExpense);
expenseRouter.delete('/api/expenses/delete/:id', protect, deleteExpense);
expenseRouter.get('/api/expenses/:id', protect, getSingleExpense);


export default expenseRouter;