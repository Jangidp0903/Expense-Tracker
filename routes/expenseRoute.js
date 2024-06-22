// Import
import express from "express";
import {
  GET_HOME,
  GET_EXPENSE,
  POST_EXPENSE,
  DELETE_EXPENSE,
} from "../controllers/expenseController.js";

const Route = express.Router();

// Home Route
Route.get("/", GET_HOME);

// Add Expense Get Route
Route.get("/addexpense", GET_EXPENSE);

// Add Expense Post Route
Route.post("/", POST_EXPENSE);

// Delete Route
Route.get("/delete/:id", DELETE_EXPENSE);

// Export
export default Route;
