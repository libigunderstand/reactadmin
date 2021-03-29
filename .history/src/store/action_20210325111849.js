import User from "./actions/useractions.js"

let Actions = {}

Actions = Object.assign({
    ...User,
    ...Actions
})
console.log(User);
export default Actions