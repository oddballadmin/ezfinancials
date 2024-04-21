import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
    name: String,
    amount: Number,
    category: String,
    createdOn: {
        type: Date,
        default: Date.now
    }

})
export default expenseSchema;