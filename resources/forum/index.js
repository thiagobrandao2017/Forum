const router     = require('express').Router();
const controller = require('./controller');


router.get('/',controller.index);
router.get('/new',controller.formNew);
router.get('/:id(\\d+)/',controller.show);

router.post('/',controller.create);
router.post('/:id(\\d+)/',controller.createComment);

router.put('/:id(\\d+)/',controller.update);
router.put('/:id(\\d+)/:id(\\d+)/',controller.updateComment);


module.exports = router;
