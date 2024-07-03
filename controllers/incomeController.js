const Income = require('../models/income');

const addIncome = async (req, res) => {
    const { name, amount, date } = req.body;

    const income = new Income({
        user: req.user._id,
        name,
        amount,
        date,
    });

    const createdIncome = await income.save();
    res.status(201).json(createdIncome);
};

const getIncomes = async (req, res) => {
    const incomes = await Income.find({ user: req.user._id });
    res.json(incomes);
};

module.exports = { addIncome, getIncomes };
