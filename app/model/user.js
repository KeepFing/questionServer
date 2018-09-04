const sequelize = require('../../config/sequlize');

const Sequelize = require('sequelize');

//定义sequelize模型，添加数据库映射关系
let User = sequelize.define('User',{
    user_id:{
        type: Sequelize.STRING(255),
        primaryKey: true
    },
    username:Sequelize.STRING(255),
    password:Sequelize.STRING(255),
    phone:Sequelize.STRING(255),
    sex:Sequelize.INTEGER(2),
    age:Sequelize.INTEGER(3),
    college:Sequelize.STRING(255),
    address:Sequelize.STRING(255)
},
{      
    freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步      
    tableName: 'user_t',       
    timestamps: false     
});


let queryAll = async () => {
    let userList = await User.findAll();
    console.log(userList);
    return userList;
}

let queryOne = async (params) => {
    let result = await sequelize.query('select * from user_t where user_id = ?',{
        replacements: [params.userId], type: sequelize.QueryTypes.SELECT 
    })
    return result;
}


module.exports = {
    queryAll:  queryAll,
    queryOne:  queryOne
}