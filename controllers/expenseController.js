// Import
import Expense from "../models/expense.js";

// Home Controller
const GET_HOME = (req, res) => {
  //   res.render("home", { title: "Expense Tracker - Home Page" });
  Expense.find()
    .then((foundExp) => {
      if (foundExp.length > 0) {
        res.render("home", {
          data: foundExp.reverse(),
          title: "Expense Tracker - Home Page",
        });
      } else {
        res.render("home", {
          data: "No Result Found",
          title: "Expense Tracker - Home Page",
        });
      }
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};

// Get Expense
const GET_EXPENSE = (req, res) => {
  res.render("addExpense", { title: "Expense Tracker - Add Expense Page" });
};

// Post Expense
const POST_EXPENSE = async (req, res) => {
  try {
    var name = req.body.name;
    var amount = req.body.amount;
    var category = req.body.category;

    var data = new Expense({
      name,
      amount,
      category,
    });

    const detail = await data.save();

    if (detail) {
      res.redirect("/");
    } else {
      res.redirect("/addexpense");
    }
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

// Delete Expense
const DELETE_EXPENSE = (req, res) => {
  const ID = req.params.id;
  Expense.findByIdAndDelete(ID)
    .then((foundexp) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(`Error => ${error}`);
    });
};

// Export
export { GET_HOME, GET_EXPENSE, POST_EXPENSE, DELETE_EXPENSE };
