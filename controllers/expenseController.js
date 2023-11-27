const Expense = require('../models/Expense');

// Add new expense
exports.addExpense = async (req, res) => {
    const { amount, description } = req.body;

    try {
        // Create a new expense record using Sequelize
        const newExpense = await Expense.create({
            amount,
            description,
        });

        // Respond with the newly created expense
        res.status(201).json(newExpense);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding expense' });
    }
};


exports.updateExpense = async (req, res) => {
    const { id } = req.params;
    const { amount, description } = req.body;

    try {
        // Find the expense by ID in the database
        const expenseToUpdate = await Expense.findByPk(id);

        // If the expense is found, update its properties
        if (expenseToUpdate) {
            expenseToUpdate.amount = amount;
            expenseToUpdate.description = description;

            // Save the updated expense to the database
            await expenseToUpdate.save();

            // Respond with the updated expense
            res.json(expenseToUpdate);
        } else {
            // If the expense is not found, return a 404 response
            res.status(404).json({ message: 'Expense record not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating expense' });
    }
};


exports.getAllExpense = async (req, res) => {
    try {
        // Retrieve all expenses from the database
        const allExpenses = await Expense.findAll();

        // Respond with the array of expenses
        res.json(allExpenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving expenses' });
    }
};

// exports.sumExpenses = (req, res) => {
    //     try {
        //         const totalExpenses = Expense.reduce((sum, expense) => sum + expense.amount, 0);
        //         res.json({ totalExpenses });
        //     } catch (error) {
            //         console.error(error);
            //         res.status(500).json({ message: 'Error summing expenses' });
            //     }
            // };
            
            // Endpoint to undo the last transaction
            // exports.undoEndPoints = (req, res) => {
                //     try {
                    //         if (transactionLog.length === 0) {
                        //             return res.status(404).json({ message: 'No transactions to undo.' });
                        //         }
                        
                        //         const lastTransaction = transactionLog.pop();
                        
                        //         if (lastTransaction.type === 'add') {
                            //             const indexToRemove = Expense.findIndex(item => item === lastTransaction.data);
                            //             Expense.splice(indexToRemove, 1);
                            //         } else if (lastTransaction.type === 'update') {
        //             const indexToUpdate = Expense.findIndex(item => item === lastTransaction.data);
        //             Expense[indexToUpdate] = lastTransaction.data;
        //         }
        
        //         res.json({ message: 'Last transaction undone successfully.', transaction: lastTransaction });
        //     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error undoing transaction' });
//     }
// }
// // Fetch all expenses
// exports.getAllExpenses = (req, res) => {
    //     try {
        //         res.json(Expense);
        //     } catch (error) {
            //         console.error(error);
            //         res.status(500).json({ message: 'Error fetching expenses' });
            //     }
            // };
            
            // array for keeping track of all transaction history
            // const transactionLog = [];
                            // exports.addExpense = (req, res) => {
                            //     const {id, amount, description} = req.body;
                                
                            //     try {
                            //         const newExpense = { amount, description, date };
                            //         Expense.push(newExpense);
                            //         res.status(201).json(newExpense);
                            //     } catch (error) {
                            //         console.error(error);
                            //         res.status(500).json({ message: 'Error adding expense' });
                            //     }
                            // };