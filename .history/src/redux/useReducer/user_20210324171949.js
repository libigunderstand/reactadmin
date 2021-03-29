import * as user from "./action-type";
// import Immutable from "immutable";

let defaultState = {
    username: '',
    password: ''
};

export const proData = (state = defaultState, action) => {
    switch (action.type) {
        case user.USERLOGIN:
            return { ...state, ...action };
        case user.USERSIGNUUP:
            return { ...state, ...action };
        default:
            return state;
    }
};
