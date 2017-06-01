const router     = require('express').Router();
const controller = require('./controller');
const views      = require('./viewsController');


router.get('/',controller.index);


module.exports = router;
