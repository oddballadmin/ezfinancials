
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import expenseRouter from './routes/expenseRoutes.js';
import incomeRouter from './routes/incomeRoutes.js';

import cookieParser from 'cookie-parser';

const PORT = 8001;
const connString = `${process.env.MONGO_URL}`;
const app = express();

// Connect to the database
mongoose.connect(connString).then(() => {
    console.log('Connected to the database');
}).catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));



app.use('/', authRouter);
app.use('/', expenseRouter);
app.use('/', incomeRouter);


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});
