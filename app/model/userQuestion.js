const sequelize = require('../../config/sequlize');

const Sequelize = require('sequelize');

let UserQuestion = sequelize.define('UserQuestion',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    userId:{
        type:Sequelize.STRING,
        field:'user_id'
    },
    questionId:{
        type:Sequelize.STRING,
        field:'question_id'
    },
    userAnwser:{
        type:Sequelize.STRING,
        field:'user_anwser'
    },
    correct:{
        type:Sequelize.INTEGER,
        field:'correct'
    },
    createTime:{
        type:Sequelize.DATE,
        field:'create_time'
    },
    subjectId:{
        type:Sequelize.STRING,
        field:'subject_id'
    }
},
{      
    freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步      
    tableName: 'user_question_t',       
    timestamps: false     
});

let saveUserQuestion = async (params) => {
    let result = await UserQuestion.create(params)
    return result;
} 

let getUserQuestionByUserId = async (userId) => {
    let result = await UserQuestion.findAll({where:{userId:userId}})
    return result
}

module.exports = {
    saveUserQuestion : saveUserQuestion,
    getUserQuestionByUserId :   getUserQuestionByUserId
}