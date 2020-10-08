import { MODAL_OPEN, MODAL_CLOSE } from "../constants/modal";

export const modal = (state = { questionId: null }, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return { questionId: action.payload.questionId };

    case MODAL_CLOSE:
      return { questionId: null };

    default:
      return state;
  }
};
