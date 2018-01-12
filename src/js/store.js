import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

import * as userActions from "./actions/userActions"

const middleware = applyMiddleware(promise(), thunk)

// export default createStore(reducer, middleware)
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(promise(), thunk),
    // other store enhancers if any
));
store.dispatch(userActions.fetch());

export default store;
