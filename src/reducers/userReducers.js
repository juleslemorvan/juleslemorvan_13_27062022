export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        isLoading: false,
        userInfo: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        isLoading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        isLoading: false,
        userInfo: null,
      };
    case "USER_LOGOUT_FAIL":
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userInfosReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERINFOS_REQUEST":
      return {
        isLoading: true,
      };
    case "GET_USERINFOS_SUCCESS":
      return {
        isLoading: false,
        userInfos: action.payload,
      };
    case "UPDATE_USERINFOS_REQUEST":
      return {
        isLoading: true,
      };
    case "UPDATE_USERINFOS_SUCCESS":
      return {
        isLoading: false,
        userInfos: action.payload,
      };
    case "UPDATE_USERINFOS_FAIL":
      return {
        isLoading: false,
        userInfos: state.userInfos,
        error: action.payload,
      };
    case "GET_USERINFOS_FAIL":
      return {
        isLoading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        isLoading: false,
        userInfos: null,
      };
    default:
      return state;
  }
};
