const Expense = require('../models/expense');

const addExpense = async (req, res) => {
    const { name, category, amount, date } = req.body;

    const expense = new Expense({
        user: req.user._id,
        name,
        category,
        amount,
        date,
    });

    const createdExpense = await expense.save();
    res.status(201).json(createdExpense);
};

const getExpenses = async (req, res) => {
    const expenses = await Expense.find({ user: req.user._id });
    res.json(expenses);
};

module.exports = { addExpense, getExpenses };
