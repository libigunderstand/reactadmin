import User from "./actions/useractions.js"

const Actions = {}

console.log(Actions);
Actions = Object.assign({
    ...User,
    ...Actions
})
export default Actions