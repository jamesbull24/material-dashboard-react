import { createStore, applyMiddleware } from redux;

import reduxThunk from "redux-thunk";

import rootReducer from "reducers/rootReducer";

function configureStore(
    state = {
        authState: {},
        statCard: {},
    }
){
    return createStore(
        rootReducer,
        state,
        applyMiddleware(
            reduceThunk
        )
    )
}

export default configureStore