import * as user from '../actiontypes/usertype';
import API from '@/api/api';

// 用户登录
const userLogin = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        console.log(dispatch);
        try{
            let result = await API.userlogin();
            dispatch({
                type: user.USERLOGIN,
                result: result,
            })
        }catch(err){
            console.error(err);
        }
    }
}

const User = {
    userLogin
}

export default User