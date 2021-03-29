import * as user from "../actiontypes/usertype";

let defaultState = {
    username: '',
    password: ''
};

const User = (state = defaultState, action) => {
    console.log(acction);
    switch (action.type) {
        
        case user.USERLOGIN:
            return { ...state, ...action };
        case user.USERSIGNUUP:
            return { ...state, ...action };
        default:
            return state;
    }
};

export default User
