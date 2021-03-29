import { combineReducers } from "redux"
import User from "./useReducer/user.js"

let rootReducer = null

rootReducer = combineReducers({
    User
})




export default rootReducer