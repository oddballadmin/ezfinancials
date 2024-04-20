import mongoose from "mongoose";
const { Schema } = mongoose;

const incomeSchema = new Schema({

    name: String,
    amount: Number,
    date: Date,
    createdOn: {
        type: Date,
        default: Date.now
    }


})
export default incomeSchema;