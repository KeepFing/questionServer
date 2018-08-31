const subjectDao = require('../dao/subjectDao');

const uuid = require('../util/uuid')

const R = require('../../config/R').R;

const common = require('../util/commonUtil');

let queryAll = async () => {
    let result = await subjectDao.queryAll();

    return R.ok(result);
}

let queryPoint = async (params) => {
    if (params.subjectId == '' || params.subjectId == null) {
        return R.error('参数错误,subjectId是必须的')
    }
    let result = await subjectDao.queryPoint(params.subjectId)
    return R.ok(result)
}

let savePoint = async (params) => {
    params.pointId = await uuid.getUuid()
    let result = await subjectDao.savePoint(params)
    if (result.affectedRows == 1) {
        return R.ok()
    }else{
        return R.error()
    }
}

let getQuestion = async (params) => {
    if (params.pointId == '' || params.pointId == null) {
        return R.error('参数错误,pointId是必须的')
    }
    let result = await subjectDao.getQuestion(params.pointId)
    return R.ok(result)
}

let saveQuestion = async (params) => {
    if (params.pointId == '' || params.pointId == null) {
        return R.error('参数错误,pointId是必须的')
    }
    params.questionId = await uuid.getUuid()
    params.createTime = await common.getLocalTime()
    console.log(params,'参数')
    let result = await subjectDao.saveQuestion(params);
    if (result.affectedRows == 1) {
        return R.ok()
    }else{
        return R.error()
    }
}

module.exports = {
    queryAll        :   queryAll,
    queryPoint      :   queryPoint,
    savePoint       :   savePoint,
    getQuestion     :   getQuestion,
    saveQuestion    :   saveQuestion
}