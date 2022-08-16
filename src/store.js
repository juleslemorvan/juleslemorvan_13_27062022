import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userInfosReducer,
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userLogout: userLogoutReducer,
  userInfos: userInfosReducer,
});

const middleware = [thunk];

const userLoginFromStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

const initialeState = { userLogin: { userInfo: userLoginFromStorage } };

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
