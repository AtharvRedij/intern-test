import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./../store/actions/modal";

const QuestionModal = ({
  questionTitle,
  userName,
  isAnswered,
  questionUrl,
}) => {
  const dispatch = useDispatch();

  const { questionId } = useSelector((state) => state.modal);

  return (
    <Modal show={Boolean(questionId)} onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>{questionTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Question asked By ${userName}`}
        <br />
        {`Question is ${!isAnswered ? "not" : ""} answerd`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => dispatch(closeModal())}>
          Close
        </Button>
        <Button variant="secondary">
          <a href={questionUrl} target="_blank" rel="noopener noreferrer">
            Go to Stackoverflow
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionModal;
