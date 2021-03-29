import User from "./actions/useractions.js"

let Actions = {}

Actions = Object.assign({
    ...User,
    ...Actions
})
console.log(Actions);
export default Actions