import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    // config = transmet le type de donnée envoyé
    const config = { headers: { "Content-Type": "application/json" } };
    // route/donnée/config
    const { data } = await axios.post(
      "/api/v1/user/login",
      { email, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userData", JSON.stringify(data));
    // pour stocker, obligation d'avoir une string
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error.response.data });
  }
};

export const logOut = () => (dispatch) => {
  try {
    dispatch({ type: "USER_LOGOUT" });
    localStorage.clear();
  } catch (error) {
    dispatch({ type: "USER_LOGOUT_FAIL", payload: null });
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
    const { data } = await axios.post("/api/v1/user/profile", {}, config);
    dispatch({ type: "GET_USERINFOS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USERINFOS_FAIL", payload: error.response.data });
  }
};

export const updateUserInfos =
  (token, firstName, lastName) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_USERINFOS_REQUEST" });
      // config = transmet le type de donnée envoyé
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      // route/donnée/config
      const { data } = await axios.put(
        "/api/v1/user/profile",
        { firstName, lastName },
        config
      );
      dispatch({ type: "UPDATE_USERINFOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "GET_USERINFOS_FAIL", payload: error.response.data });
    }
  };
