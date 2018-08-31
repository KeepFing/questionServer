const articleService = require('../service/articleService');

exports.getArticleList = async (ctx, next) => {
    let params = ctx.request.body;
    let result = await articleService.getArticleList(params)
    
    ctx.response.body = result
}