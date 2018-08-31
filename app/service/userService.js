const userDao = require('./../dao/userDao.js');

const uuid = require('../util/uuid')

const R = require('../../config/R').R

const md5 = require('md5-node')

const jwt = require('jsonwebtoken');


//登录
let login = async (params) => {
    params.password = md5(params.password)
    var result = await userDao.login(params)
    if (result[0].count == 1) {
            const obj = {'userId':result[0].user_id}
            return R.ok(obj)
    }else{
        return R.error('用户名或密码错误')
    }
    
};

//注册
let register = async (params) => {
    let count = await userDao.queryUserByUsername(params.username);
    if (count[0].count == 1) {
        return R.error('用户名已存在')
    }
    params.password = md5(params.password)
    params.userId = await uuid.getUuid()
    let result = await userDao.register(params)
    if (result.affectedRows == 1) {
        return R.ok()
    }else{
        return R.error()
    }
}

module.exports = {
    login       :   login,
    register    :   register
};