// Import the Income array from the Income.js file
const Income = require('../database/Income');

// Fetch all income data from the array
exports.getAllIncome = (req, res) => {
    try {
        res.json(Income);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching income data' });
    }
};

// Add new income to the array
exports.addIncome = (req, res) => {
    const { amount, description, date } = req.body;

    try {
        const newIncome = { amount, description, date };
        Income.push(newIncome);
        res.status(200).json(newIncome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding income' });
    }
};

// Update income by ID in the array
exports.updateIncome = (req, res) => {
    const { id } = req.params;
    const { amount, description, date } = req.body;

    try {
        const index = Income.findIndex((income) => income.id === id);
        if (index !== -1) {
            Income[index] = { amount, description, date };
            res.json(Income[index]);
        } else {
            res.status(404).json({ message: 'Income record not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating income' });
    }
};

// Calculate the total income from the array
exports.sumIncome = (req, res) => {
    try {
        const totalIncome = Income.reduce((sum, income) => sum + income.amount, 0);
        res.json({ totalIncome });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error summing income' });
    }
};
