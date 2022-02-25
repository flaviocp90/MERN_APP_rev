import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const sigin = (formData, history) => async (dispatch) => {
    try {
        history('/')
    } catch (error) {
        console.log(error.message)
        
    }
};

export const sigup = (formData, history) => async (dispatch) => {
    try {
        history('/')
    } catch (error) {
        console.log(error.message)
        
    }
};