const subjectService = require('../service/subjectService');

exports.getSubjects = async (ctx, next) =>{

    ctx.response.body = await subjectService.queryAll()
    
}

exports.getPoints = async (ctx, next) => {
    let params = ctx.request.body;
    ctx.response.body = await subjectService.queryPoint(params)
}

exports.savePoint = async (ctx, next) => {
    let params = ctx.request.body;
    ctx.response.body = await subjectService.savePoint(params)
}

exports.getQuestion = async (ctx, next) => {
    let params = ctx.request.body;
    ctx.response.body = await subjectService.getQuestion(params);
}

exports.saveQuestion = async (ctx, next) => {
    let params = ctx.request.body;
    ctx.response.body = await subjectService.saveQuestion(params);
}

exports.saveUserQuestion = async (ctx, next) => {
    let params = ctx.request.body;
    ctx.response.body = await subjectService.saveUserQuestion(params);
}