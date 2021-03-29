import * as user from '../actiontypes/usertype';
import API from '@/api/api';

// 用户登录
const userLogin = (data) => {
    // 返回函数，异步dispatch
    return {
        type: "USERLOGIN",
        payload: data
    }
    // return async dispatch => {
    //     try{
    //         let result = await API.userlogin(data.param);
    //         dispatch({
    //             type: user.USERLOGIN,
    //             result: result,
    //         })
    //     }catch(err){
    //         console.error(err);
    //     }
    // }
}

const User = {
    userLogin
}

export default User