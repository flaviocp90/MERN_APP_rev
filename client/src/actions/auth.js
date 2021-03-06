import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    history("/");
    console.log(formData)
  } catch (error) {
    console.log(error);
  }
};
