
import http from "@/utils/httpRequest"
export default {
    async userlogin(data) {
        try{
            let result = http({ 
                method: 'post', 
                param: data,
                url: '/users/login'
            })
            if(result){
                return result;
            }else{
                let err = '获取数据失败！'
                throw err;
            }
        }catch(err){
            throw err;
        }
    }
}