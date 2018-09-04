const mysql = require('./../util/mysqlUtil');

const sql = require('../mapper/subjectMapper');

const userQuestionModel = require('../model/userQuestion');

let queryAll = async () => {
    let mysqlOptions = {
        sql : sql.queryAll,
        args : []
    }
    let result = await mysql.execQuery(mysqlOptions);
    return result
}

let queryPoint = async (subjectId) => {
    let mysqlOptions = {
        sql : sql.queryPoint,
        args : [subjectId]
    }
    let result = await mysql.execQuery(mysqlOptions);
    return result
}

let savePoint = async (pointInfo) => {
    let mysqlOptions = {
        sql : sql.savePoint,
        args :　[pointInfo.pointId,pointInfo.pointName,pointInfo.subjectId,pointInfo.type]
    }
    let result = await mysql.execQuery(mysqlOptions)
    return result
}

let getQuestion = async (pointId) => {
    let mysqlOptions = {
        sql : sql.queryQuestion,
        args : [pointId]
    }
    let result = await mysql.execQuery(mysqlOptions);
    return result;
}

let saveQuestion = async (questionInfo) => {
    let mysqlOptions = {
        sql : sql.saveQuestion,
        args : [questionInfo.questionId,questionInfo.questionTitle,questionInfo.anwserItem,questionInfo.anwser,
            questionInfo.resovel,questionInfo.createTime,questionInfo.pointId]
    }
    console.log(mysqlOptions.sql)
    let result = await mysql.execQuery(mysqlOptions);
    return result;
}

let saveUserQuestion = async (Info) => {
    let result = await userQuestionModel.saveUserQuestion(Info);
    return result
}

module.exports = {
    queryAll        :   queryAll,
    queryPoint      :   queryPoint,
    savePoint       :   savePoint,
    getQuestion     :   getQuestion,
    saveQuestion    :   saveQuestion,
    saveUserQuestion    :   saveUserQuestion
};