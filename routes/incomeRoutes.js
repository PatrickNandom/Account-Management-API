const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');
const verifyUser = require('../middlewares/verifyUser');


router.get('/', incomeController.getAllIncome);
router.post('/addIncome', verifyUser, incomeController.addIncome);
router.put('/:id', verifyUser, incomeController.updateIncome);
router.get('/sum', incomeController.sumIncome);
router.post('/undo', verifyUser, incomeController.undoEndPoints);

module.exports = router;

