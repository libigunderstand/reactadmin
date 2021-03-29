import User from "./actions/useractions.js"

const Actions = {}

console.log(User);
Actions = Object.assign({
    ...User,
    ...Actions
})
export default Actions