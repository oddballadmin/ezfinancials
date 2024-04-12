
import express from 'express';
import { test } from './routes/authController.js';

const app = express();
const PORT = 3210;


app.get('/', test);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
