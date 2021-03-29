import * as pro from './action-type';
import API from '@/api/api';

// 初始化获取商品数据，保存至redux
export const userLogin = () => {
    // 返回函数，异步dispatch
    return async dispatch => {
        try{
            let result = await API.userlogin();
            console.log(result);
            dispatch({
                type: pro.GETPRODUCTION,
                dataList: result,
            })
        }catch(err){
            console.error(err);
        }
    }
}

// 选择商品
export const togSelectPro = index => {
    return {
        type: pro.TOGGLESELECT,
        index,
    }
}