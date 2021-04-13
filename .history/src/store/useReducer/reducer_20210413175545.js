import * as user from "../actiontypes/usertype";

let defaultState = {

};

const User = (state = defaultState, action) => {
    switch (action.type) {
        
        case user.USERLOGIN:
            return { result: action.payload };
        case user.USERSIGNUUP:
            return { result: action.payload };
        default:
            return state;
    }
};

export default User
