const router = require('koa-router')()

const user_controller = require('../app/controller/user_controller')

router.prefix('/api/user')

router.post('/login',user_controller.login)

router.post('/register',user_controller.register)

module.exports = router
