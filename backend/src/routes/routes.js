const { Router } = require('express');
const router = Router();

const { getReminder, newReminder, updateReminder, deleteReminder } = require('../controllers/lembretesController');

router.get('/reminder', getReminder );

router.post('/reminder', newReminder );

router.put('/reminder/:id', updateReminder);

router.delete('/reminder/:id', deleteReminder);


module.exports = router;