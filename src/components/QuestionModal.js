import React from "react";
import { Modal, Button } from "react-bootstrap";

const QuestionModal = ({
  handleClose,
  questionTitle,
  userName,
  isAnswered,
  questionUrl,
  showModal,
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{questionTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Question asked By ${userName}`}
        <br />
        {`Question is ${!isAnswered ? "not" : ""} answerd`}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
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
