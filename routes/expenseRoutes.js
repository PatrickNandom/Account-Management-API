const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
// const verifyUser = require('../middlewares/verifyUser');

router.post('/', expenseController.addExpense);
router.put('/:id', expenseController.updateExpense);
router.get('/', expenseController.getAllExpense);


// router.get('/sum', expenseController.sumExpenses);
// router.post('/undo', verifyUser, expenseController.undoEndPoints);

module.exports = router;
