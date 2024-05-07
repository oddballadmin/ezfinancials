import User from '../models/user.js';
// Controllers/incomeController.js

export const getAllIncomes = async (req, res) => {

    try {
        // Assuming you store the user's ID in JWT and it's extracted in authenticateToken middleware
        const user = await User.findById(req.user.id).select('incomes');
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if user has incomes
        if (user.incomes.length === 0) {
            return res.status(404).json({ error: "No incomes found for this user" });
        }
        res.json(user.incomes);
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
    try {
        const { id } = req.params;  // Use the ID directly without converting to ObjectId

        const itemExists = await User.exists({ _id: req.user.id, "incomes._id": id });
        if (!itemExists) {
            return res.status(404).json({ error: "Income Item not found" });
        }

        const result = await User.updateOne(

            { _id: req.user.id },
            { $pull: { incomes: { _id: id } } }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Income Item not found or user not found" });
        }
        console.log(id);
        console.log(req.params.id);
        return res.status(200).json({ message: "Income Item deleted successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
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
export const updateIncome = async (req, res) => {
    const { id } = req.params;
    const updates = req.body; // This contains only the fields that need to be updated

    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const income = user.incomes.id(id);
        if (!income) {
            return res.status(404).json({ error: "Income item not found" });
        }

        // Update only the fields that are provided in the request body
        if (updates.name) income.name = updates.name;
        if (updates.amount) income.amount = updates.amount;

        await user.save(); // Save the updated user document
        res.status(200).json(income);
    } catch (error) {
        console.error("Failed to update income:", error);
        res.status(500).json({ error: "Server error" });
    }
};