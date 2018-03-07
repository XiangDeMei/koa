var router = require('koa-router')();

var user = require('./user');

router.use('/api', user.routes(), user.allowedMethods());

module.exports = router;