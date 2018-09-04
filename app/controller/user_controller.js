const userService = require('./../service/userService.js');

const verify = require('../util/verify');

const userModel = require('../model/user');

exports.login = async (ctx, next) => {
    let params = ctx.request.body

    ctx.response.body = await userService.login(params)
};

exports.register = async (ctx, next) => {
    let params = ctx.request.body
    ctx.response.body = await userService.register(params)
}
