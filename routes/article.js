const router = require('koa-router')()

const article_controller = require('../app/controller/article_controller')

router.get('/strings', async (ctx, next) => {
    ctx.body = {'code':111111111111,msg:'success'}
  })

router.post('/api/article/getArticleList',article_controller.getArticleList)

module.exports = router