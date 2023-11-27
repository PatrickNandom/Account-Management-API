const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');
// const verifyUser = require('../middlewares/verifyUser');

router.post('/', incomeController.addIncome);
router.put('/:id', incomeController.updateIncome);
router.get('/', incomeController.getAllIncome);


// router.get('/sum', expenseController.sumExpenses);
// router.post('/undo', verifyUser, expenseController.undoEndPoints);

module.exports = router;
