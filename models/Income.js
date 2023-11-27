const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('account-management', 'postgres', 'patrick5522', {
    host: 'localhost',
    dialect: 'postgres'
});

const Income = sequelize.define('Income', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
});

Income.sync({ force: false }).then(() => {
    console.log('Income table created (or already exists)');
});

// Export the Expense model for use in other files
module.exports = Income;