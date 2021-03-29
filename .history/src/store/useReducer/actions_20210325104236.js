import * as user from './action-type';
import API from '@/api/api';

// 用户登录
export const userLogin = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try{
            let result = await API.userlogin();
            console.log(result);
            dispatch({
                type: user.USERLOGIN,
                res: result,
            })
        }catch(err){
            console.error(err);
        }
    }
}

// // 选择商品
// export const togSelectPro = index => {
//     return {
//         type: pro.TOGGLESELECT,
//         index,
//     }
// }