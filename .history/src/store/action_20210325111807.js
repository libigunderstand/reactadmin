import User from "./actions/useractions.js"

const Actions = {}

Actions = Object.assign({
    ...User,
    ...Actions
})

// export default Actions