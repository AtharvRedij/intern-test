import {
  QUESTIONS_LIST_REQUEST,
  QUESTIONS_LIST_SUCCESS,
  QUESTIONS_LIST_FAIL,
} from "../constants/questions";

const API_URL =
  "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow";

export const listQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTIONS_LIST_REQUEST });

    const response = await fetch(API_URL);
    const data = await response.json();

    dispatch({
      type: QUESTIONS_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: QUESTIONS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
