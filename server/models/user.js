import mongoose from "mongoose";
import expensesSchema from "./expenses.js";
import incomesSchema from "./incomes.js";
const { Schema } = mongoose;


const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    expenses: [expensesSchema]
    ,
    incomes: [incomesSchema]

})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;