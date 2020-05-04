const { Router } = require('express');
const router = Router();

const { getReminder, getFinishedReminder, newReminder, updateReminder, deleteReminder, doneReminder } = require('../controllers/lembretesController');

router.get('/reminder/active', getReminder );

router.get('/reminder/inactive', getFinishedReminder );

router.post('/reminder/done', doneReminder);

router.post('/reminder', newReminder );

router.put('/reminder/:id', updateReminder);

router.delete('/reminder/:id', deleteReminder);


module.exports = router;