import { applyMiddleware, compose, createStore } from "redux";
import users from "./reducers/users";
import thunk from "redux-thunk";

export default compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(users)