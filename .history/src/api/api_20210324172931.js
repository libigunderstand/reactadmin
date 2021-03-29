
import http from "@/utils/httpRequest"
export default {
    async uploadImg(params = {}){
        try{
            let result = await this.axios('post', '//elm.cangdu.org/v1/addimg/shop', params); 
            if(result && result.status === 1){
                return result;
            }else{
                let err = {
                    tip: '上传图片失败',
                    response: result,
                    data: params,
                    url: '//elm.cangdu.org/v1/addimg/shop',
                }
                throw err;
            }
        }catch(err){
            throw err;
        }
    }
}