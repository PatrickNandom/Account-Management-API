const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.getAllIncome);
router.post('/addIncome', incomeController.addIncome);
router.put('/:id', incomeController.updateIncome);
router.get('/sum', incomeController.sumIncome);

module.exports = router;

