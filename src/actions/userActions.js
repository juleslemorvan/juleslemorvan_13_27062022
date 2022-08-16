import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    // config = transmet le type de donnée envoyé
    const config = { headers: { "Content-Type": "application/json" } };
    // route/donnée/config
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userLogin", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error.response.data });
  }
};
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGOUT_SUCCESS" });
    localStorage.clear();
  } catch (error) {
    dispatch({ type: "USER_LOGOUT_FAIL", payload: error.response.data });
  }
};

export const getUserInfo = (token) => async (dispatch) => {
  try {
    dispatch({ type: "GET_USERINFOS_REQUEST" });
    // config = transmet le type de donnée envoyé
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // route/donnée/config
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      { token },
      config
    );
    dispatch({ type: "GET_USERINFOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USERINFOS_FAIL", payload: error.response.data });
  }
};
