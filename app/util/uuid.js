const uuid = require('node-uuid')

exports.getUuid = async()=>{
    var uid = uuid.v1()
    uid = uid.replace(/\-/g,'');
    return uid
}