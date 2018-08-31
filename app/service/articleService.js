const articleDao = require('../dao/articleDao');

const R = require('../../config/R').R

const page = require('../util/page')

var getArticleList = async (data) =>{
    if (data.limit == null)
        return R.error()
    if (data.page == null)
        return R.error()
    let pageInfo = page.returnPage(data.page,data.limit)
    console.log(pageInfo,'------------------>')
    
    let result = await articleDao.getArticleList(data.keywords,pageInfo.left,pageInfo.right)
    console.log(result,"======================")

    return R.ok(result)
}

module.exports = {
    getArticleList:getArticleList
}