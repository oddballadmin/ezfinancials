
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes.js';
import expenseRouter from './routes/expenseRoutes.js';
import incomeRouter from './routes/incomeRoutes.js';
import cors from 'cors';

import cookieParser from 'cookie-parser';

const PORT = 8001;
const connString = `${process.env.MONGO_URL}`;
const app = express();

// Connect to the database
mongoose.connect(connString).then(() => {
    console.log('Connected to the database');
}).catch((err) => console.log(err));

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: ['http://localhost:3000'],
    credentials: true



    // This is important for cookies to be sent and received
};

app.use(cors(corsOptions));



app.use('/', authRouter);
app.use('/', expenseRouter);
app.use('/', incomeRouter);


app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});
