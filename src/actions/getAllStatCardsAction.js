const getAllStatCardsAction = () => async (dispatch) => {
	// make GET call to DB to retrieve all stat cards data.
	dispatch({
		type: 'getAllStatCardsAction',
		payload: {},
	});
};

export default getAllStatCardsAction;
