import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/userReducers"

const reducer = combineReducers({
userLogin : userLoginReducer
})

const middleware = [thunk]

const initialeState = {}


const store = createStore(reducer, initialeState, composeWithDevTools(applyMiddleware(...middleware)) )

export default store