import User from '../models/user.js'


export const getAllExpenses = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('expenses');
        if (!user) {
            return res.json({ error: "User not found" })
        }
        res.json(user.expenses)
    }
    catch (error) {
        console.log(error)
    }
}

export const addExpense = async (req, res) => {
    try {
        const { name, amount, category } = req.body;
        const user = await User.findById(req.user.id);
        const userExpenseList = user.expenses;


        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (!name || !amount || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newExpense = {
            name,
            amount,
            category
        };
        userExpenseList.push(newExpense);
        user.expenses = userExpenseList
        await user.save();  // Save the user document with the new expense
        return res.status(201).json(newExpense);  // Send back the added expense as confirmation
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });  // Inform the client about the error
    }
}


export const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;  // Use the ID directly without converting to ObjectId

        const itemExists = await User.exists({ _id: req.user.id, "expenses._id": id });
        if (!itemExists) {
            return res.status(404).json({ error: "Expense not found" });
        }

        const result = await User.updateOne(

            { _id: req.user.id },
            { $pull: { expenses: { _id: id } } }
        );

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Expense not found or user not found" });
        }
        console.log(id);
        console.log(req.params.id);
        return res.status(200).json({ message: "Expense deleted successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}

export const getSingleExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const expense = user.expenses.id(id);
        if (!expense) {
            return res.status(404).json({ error: "Expense not found" });
        }
        return res.status(200).json(expense);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}

