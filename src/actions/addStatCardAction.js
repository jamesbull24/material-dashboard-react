const addStatCardAction = (
    statName,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconState,
    statFooterPercentage,
    statFooterText,
) => async dispatch => {
    // make a call to DB to add new stat card with above details
    dispatch({
        type: "addStatCard",
        payload: {
            statName: statName,
            statDescription: statDescription,
            statIcon: statIcon,
            statIconColor: statIconColor,
            statFooterIcon: statFooterIcon,
            statFooterIconState: statFooterIconState,
            statFooterPercentage: statFooterPercentage,
            statFooterText: statFooterText
        }
    })
}

export default addStatCardAction;