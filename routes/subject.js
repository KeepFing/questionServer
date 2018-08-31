const router = require('koa-router')()

const subject_controller = require('../app/controller/subject_controller')

router.prefix('/api/subject')

router.get('/getSubjects',subject_controller.getSubjects)

router.post('/getPoints',subject_controller.getPoints)

router.post('/savePoint',subject_controller.savePoint)

router.post('/getQuestion',subject_controller.getQuestion)

router.post('/saveQuestion',subject_controller.saveQuestion)

module.exports = router