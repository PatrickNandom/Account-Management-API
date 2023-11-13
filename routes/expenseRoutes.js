const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const  verifyUser = require('../middlewares/verifyUser');

router.get('/', expenseController.getAllExpenses);
router.post('/', verifyUser, expenseController.addExpense);
router.put('/:id', verifyUser, expenseController.updateExpense);
router.get('/sum', expenseController.sumExpenses);
router.post('/undo', verifyUser, expenseController.undoEndPoints);

module.exports = router;
