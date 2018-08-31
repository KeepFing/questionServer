module.exports = {
    saveUser:'INSERT INTO user_t(user_id,username,password,phone,sex,age,college,address) VALUES(?,?,?,?,?,?,?,?)',
    login:'select count(*) as count,user_id from user_t where user_t.username = ? and user_t.password = ?',
    queryUserByUsername:'select count(*) as count from user_t where user_t.username = ?'
}