const registerAction = (
    name,
    email,
    password
) => async dispatch => {
    // before DB connected, should be unable to register.
    dispatch({
        type: "register",
        payload: "false"
    })
}

export default registerAction;