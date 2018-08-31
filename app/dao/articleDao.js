const mysql = require('../util/mysqlUtil')

var getArticleList = async(keywords,left,right)=>{
    if (keywords == null) {
        var sqlOptions = {
            sql:'SELECT * FROM article_t LIMIT ?,?',
            args:[left,right]
        }
    }else{
        var sqlOptions = {
            sql:'select * from article_t where title LIKE "%"?"%" limit ?,?',
            args:[keywords,left,right]
        }
    }
    
    console.log(left,right)
    var result = await mysql.execQuery(sqlOptions);
    return result;
}

module.exports = {
    getArticleList:getArticleList
}