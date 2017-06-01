const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');


router.get('/new',views.formNew);

router.post('/',controller.create);
router.get('/',controller.index);

module.exports = router;
