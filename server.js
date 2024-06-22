// Import
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import env from "dotenv";
import Route from "./routes/expenseRoute.js";

// ENV
env.config();

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// MiddleWare
// --static
app.use(express.static("public"));
// --bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// --ejs
app.set("view engine", "ejs");

// Create DataBase
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`DataBase Connected Successfully`);
    // Create Server
    app.listen(PORT, () => {
      console.log(`Server Started on Local Port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to Connect DataBase => ${error}`);
  });

//   Route
app.use(Route);
