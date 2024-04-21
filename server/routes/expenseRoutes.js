import express from 'express';
import cors from 'cors';
import authenticateToken from '../middleware/authenticate.js';
import { addExpense, deleteExpense, getAllExpenses, getSingleExpense } from '../controllers/expenseController.js';
const expenseRouter = express.Router();

// Middleware to allow cross-origin requests(CORS)
expenseRouter.use(cors({
    origin: 'http://localhost:3000',
    credentials: true

}));

// API - Routes
expenseRouter.get('/:id/expenses/', authenticateToken, getAllExpenses);
expenseRouter.post('/:id/expenses/add', authenticateToken, addExpense);
expenseRouter.delete('/:id/expenses/:id', authenticateToken, deleteExpense);
expenseRouter.get('/:id/expenses/:id', authenticateToken, getSingleExpense);


export default expenseRouter;