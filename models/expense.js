// Import
import mongoose from "mongoose";

// Expense Schema
const expenseSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true,
  },
  amount: {
    type: Number,
    minlength: 3,
  },
  category: {
    type: String,
  },
});

// Expense
const Expense = mongoose.model("expense", expenseSchema);

// Export
export default Expense;
