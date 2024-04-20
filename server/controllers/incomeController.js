import User from '../models/user.js'


export const getAllIncomes = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.json({ error: "User not found" })
        }
        res.json(user.incomes)
    }
    catch (error) {
        console.log(error)
    }
}
