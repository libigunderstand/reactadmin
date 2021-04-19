
import http from "@/utils/httpRequest"
const API = {
    async userlogin(data) {
        try{
            let result = http({ 
                method: 'post', 
                param: data,
                url: '/users/userlogin'
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
    },
    async usersignup(data) {
        try{
            let result = http({ 
                method: 'post', 
                param: data,
                url: '/api/users/usersignup'
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

export default API