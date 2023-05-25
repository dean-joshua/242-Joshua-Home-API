const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/personalData', require('./personalData'));

module.exports = router;
