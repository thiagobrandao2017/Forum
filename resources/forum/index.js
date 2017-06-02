const router     = require('express').Router();
const controller = require('./controller');


router.get('/new',controller.formNew);

router.post('/',controller.create);
router.get('/',controller.index);


router.get('/:id(\\d+)/',controller.show);
router.post('/:id(\\d+)/',controller.createComment);

module.exports = router;
