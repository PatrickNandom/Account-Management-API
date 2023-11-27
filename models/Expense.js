const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('account-management', 'postgres', 'patrick5522', {
    host: 'localhost',
    dialect: 'postgres'
});

const Expense = sequelize.define('Expense', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
});

Expense.sync({ force: false }).then(() => {
    console.log('Expense table created (or already exists)');
});

// Export the Expense model for use in other files
module.exports = Expense;