const loginAction = (
    email,
    password
) => async dispatch => {
    // before DB connected, should be unable to login.
    dispatch({
        type: "login",
        payload: "false"
    })
}

export default loginAction;