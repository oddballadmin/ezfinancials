import express from 'express';
import cors from 'cors';
import { registerUser, loginUser } from '../controllers/authController.js';
const router = express.Router();


router.use(cors({
    origin: 'http://localhost:3000',
    credentials: true

}));

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;