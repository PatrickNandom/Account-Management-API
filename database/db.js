const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('account-management', 'postgres', 'patrick5522', {
    host: 'localhost',
    dialect: 'postgres',
});

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;
