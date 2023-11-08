// Import the Expense array from the Expense.js file
const Expense = require('../database/Expense');

// Fetch all expenses
exports.getAllExpenses = (req, res) => {
    try {
        res.json(Expense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching expenses' });
    }
};

// Add new expense
exports.addExpense = (req, res) => {
    const { amount, description, date } = req.body;

    try {
        const newExpense = { amount, description, date };
        Expense.push(newExpense);
        res.status(201).json(newExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding expense' });
    }
};

// Update expense by ID
exports.updateExpense = (req, res) => {
    const { id } = req.params;
    const { amount, description, date } = req.body;

    try {
        const index = Expense.findIndex((expense) => expense.id === id);
        if (index !== -1) {
            Expense[index] = { amount, description, date };
            res.json(Expense[index]);
        } else {
            res.status(404).json({ message: 'Expense record not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating expense' });
    }
};

// Sum all expenses
exports.sumExpenses = (req, res) => {
    try {
        const totalExpenses = Expense.reduce((sum, expense) => sum + expense.amount, 0);
        res.json({ totalExpenses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error summing expenses' });
    }
};
