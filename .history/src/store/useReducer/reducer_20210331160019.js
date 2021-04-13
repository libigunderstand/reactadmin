import * as user from "../actiontypes/usertype";

let defaultState = {

};

const User = (state = defaultState, action) => {
    switch (action.type) {
        
        case user.USERLOGIN:
            return action.payload;
        case user.USERSIGNUUP:
            return { ...state, ...action };
        default:
            return state;
    }
};

export default User
