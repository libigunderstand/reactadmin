import API from '@/api/api';

// 用户登录
const userLogin = (data) => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try{
            let result = await API.userlogin(data);
            dispatch({
                type: "USERLOGIN",
                payload: result
            })
        }catch(err){
            console.error(err);
        }
    }
}
// 用户注册
const userSignup = (data) => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try{
            let result = await API.userlogin(data);
            dispatch({
                type: "USERLOGIN",
                payload: result
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