const router = require('express').Router();
const controller = require('../controllers/careerGoals');
const validateObjectId = require('../middleware/validateObjectId');

router.get('/', controller.getAll);
router.get('/:id', validateObjectId, controller.getOne);
router.post('/', controller.create);
router.put('/:id', validateObjectId, controller.update);
router.delete('/:id', validateObjectId, controller.remove);

module.exports = router;
