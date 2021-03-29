import User from "./actions/useractions.js"

let Actions = {}

Actions = Object.assign({
    ...User,
    ...Actions
})

export default Actions