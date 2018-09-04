const mysql = require('./../util/mysqlUtil');

const sql = require('../mapper/userMapper')

const userQuestionModel = require('../model/userQuestion');

var login = async (loginInfo) => {
    let mysqlOptions = {
        sql : sql.login,
        args : [loginInfo.username,loginInfo.password]
    }
    var result = await mysql.execQuery(mysqlOptions);
    return result;
}

let register = async (registerInfo) => {
    let mysqlOptions = {
        sql : sql.saveUser,
        args : [registerInfo.userId,registerInfo.username,registerInfo.password,registerInfo.phone,
            registerInfo.sex,registerInfo.age,registerInfo.college,registerInfo.address]
    }
    let result = await mysql.execQuery(mysqlOptions);
    return result
}

let queryUserByUsername = async (username) => {
    let mysqlOptions = {
        sql : sql.queryUserByUsername,
        args : [username]
    }
    let result = await mysql.execQuery(mysqlOptions);
    return result;
}

let getUserQuestions = async (userId) => {
    let result = userQuestionModel.getUserQuestionByUserId(userId);
    return result;
}


module.exports = {
    login           :   login,
    register        :   register,
    queryUserByUsername :   queryUserByUsername,
    getUserQuestions    :   getUserQuestions
};