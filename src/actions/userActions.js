import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error.response.data });
  }
};
