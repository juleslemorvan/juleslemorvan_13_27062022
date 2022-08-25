import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userInfosReducer, userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userInfos: userInfosReducer,
});

const middleware = [thunk];
// middewar => permet d'appeler de dispatcher des actions a l'interieur d'autres actions

const userLoginFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialeState = { userLogin: { userInfo: userLoginFromStorage } };

const store = createStore(
  reducer,
  initialeState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
