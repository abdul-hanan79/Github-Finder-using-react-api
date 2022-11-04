const alertReducers = (state, action) => {
    switch (action.type) {
        case "SET_ALERT":
            return action.palyload
        case "REMOVE_ALERT":
            return null
        default:
            return state
    }
}
export default alertReducers 