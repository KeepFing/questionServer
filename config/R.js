
exports.R = {
    ok:(data)=>{
        if (data) {
            let obj = {'code':0,'msg':'success','data':data}
            return obj
        }else{
            let obj = {'code':0,'msg':'success'}
            return obj
        }
    },
    error:(msg)=>{
        if (msg) {
            let obj = {'code':1,'msg':msg}
            return obj
        }else{
            let obj = {'code':1,'msg':'未知异常，请联系管理员'}
            return obj
        }
    },
    expired:()=>{
        let obj = {'code':401,'msg':'Authorization Token Fail'}
        return obj
    }

}