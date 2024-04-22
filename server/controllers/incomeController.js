import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Controllers/incomeController.js

export const getAllIncomes = async (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Assuming you store the user's ID in JWT and it's extracted in authenticateToken middleware
        const user = await User.findById(decoded._id).select('incomes');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if user has incomes
        if (user.incomes.length === 0) {
            return res.status(404).json({ error: "No incomes found for this user" });
        }
        res.json({ incomes: user });
    } catch (error) {
        console.error("Failed to fetch incomes:", error);
        res.status(500).json({ error: "Server error" });
    }
};


export const addIncome = async (req, res) => {
    const { name, amount, category } = req.body;
    if (!name || !amount || !category) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const newIncome = { name, amount, category };
        user.incomes.push(newIncome);
        await user.save();
        res.status(201).json(newIncome);
    } catch (error) {
        console.error("Failed to add income:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export const deleteIncome = async (req, res) => {
    const { incomeId } = req.params;

    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const income = user.incomes.id(incomeId);
        if (!income) {
            return res.status(404).json({ error: "Income not found" });
        }

        income.remove();
        await user.save();
        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        console.error("Failed to delete income:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export const getSingleIncome = async (req, res) => {
    try {
        const { incomeId } = req.params;
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const income = user.incomes.id(incomeId);
        if (!income) {
            return res.status(404).json({ error: "Income not found" });
        }

        res.json(income);
    } catch (error) {
        console.error("Failed to get income:", error);
        res.status(500).json({ error: "Server error" });
    }
}
