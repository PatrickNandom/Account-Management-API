const Income = require('../models/Income');

// Add new expense
exports.addIncome = async (req, res) => {
    const { amount, description } = req.body;

    try {
        // Create a new expense record using Sequelize
        const newIncome = await Income.create({
            amount,
            description,
        });

        // Respond with the newly created expense
        res.status(201).json(newIncome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding income' });
    }
};


exports.updateIncome = async (req, res) => {
    const { id } = req.params;
    const { amount, description } = req.body;

    try {
        // Find the expense by ID in the database
        const incomeToUpdate = await Income.findByPk(id);

        // If the expense is found, update its properties
        if (incomeToUpdate) {
            incomeToUpdate.amount = amount;
            incomeToUpdate.description = description;

            // Save the updated expense to the database
            await incomeToUpdate.save();

            // Respond with the updated expense
            res.json(incomeToUpdate);
        } else {
            // If the income is not found, return a 404 response
            res.status(404).json({ message: 'Income record not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating Income' });
    }
};


exports.getAllIncome = async (req, res) => {
    try {
        // Retrieve all expenses from the database
        const allIncome = await Income.findAll();

        // Respond with the array of expenses
        res.json(allIncome);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving incomes' });
    }
};
