const jwt = require('jsonwebtoken');

const R = require('../../config/R').R

exports.verifyToken = async (token) => {
    var info = {};
    await jwt.verify(token, 'chat_token', (err, decoded) => {
         if (err) {
             info = {'isExpired':true}
         }else{
            info = decoded;
         }
    })
    return info
}
