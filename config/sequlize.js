const Sequelize = require('sequelize');

const config = require('../config/mysql_config');

//创建一个sequelize对象实例：
var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = sequelize;