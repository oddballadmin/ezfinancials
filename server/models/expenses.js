import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
    name: String,
    amount: Number,
    date: Date,
    category: String,
    createdOn: {
        type: Date,
        default: Date.now
    }

})
export default expenseSchema;