import User from "./actions/useractions.js"

const Actions = {}

Actions = Object.assign({
    ...User,
    ...Actions
})
console.log(Actions);
export default Actions