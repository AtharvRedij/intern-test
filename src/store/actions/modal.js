import { MODAL_OPEN, MODAL_CLOSE } from "../constants/modal";

export const openModal = (questionId) => {
  return {
    type: MODAL_OPEN,
    payload: {
      questionId,
    },
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE,
  };
};
