import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

const QuestionCard = ({
  questionId,
  userName,
  userImage,
  questionTitle,
  questionTags,
  onInfoClicked,
}) => {
  return (
    <Card className="my-3 rounded">
      <Row>
        <Col md="auto">
          <Card.Img
            src={userImage}
            variant="top"
            alt={userName}
            style={{
              height: "180px",
              width: "180px",
            }}
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{questionTitle}</Card.Title>

            <Card.Text>{questionTags.join(", ")}</Card.Text>

            <Button variant="primary" onClick={() => onInfoClicked(questionId)}>
              Know more
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default QuestionCard;
