const router     = require('express').Router();
const controller = require('./controller');


router.get('/new',controller.formNew);

router.post('/',controller.create);
router.get('/',controller.index);


router.get('/:id(\\d+)/',controller.show);


module.exports = router;
