import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import QuestionCard from "./components/QuestionCard";
import QuestionModal from "./components/QuestionModal";

const API_URL =
  "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow";

const App = () => {
  // All questions from API
  const [questions, setQuestions] = useState([]);

  // selected question from 'Know more'
  const [question, setQuestion] = useState({});

  // modal show/hide
  const [showModal, setShowModal] = useState(false);

  // fetches data
  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuestions(data.items);
    };

    getQuestions();
  }, []);

  // handler for 'know more' btn click
  const handleInfoClicked = (questionId) => {
    const ques = questions.find(
      (question) => question.question_id === questionId
    );
    setQuestion(ques);
    setShowModal(true);
  };

  return (
    <Container className=" justify-content-md-center">
      {/* modal */}
      {showModal && (
        <QuestionModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
          questionTitle={question.title}
          userName={question.owner.display_name}
          isAnswered={question.is_answered}
          questionUrl={question.link}
        />
      )}

      {/* All questions */}
      {questions.map((question) => (
        <QuestionCard
          key={question.question_id}
          questionId={question.question_id}
          userName={question.owner.display_name}
          userImage={question.owner.profile_image}
          questionTitle={question.title}
          questionTags={question.tags}
          onInfoClicked={handleInfoClicked}
        />
      ))}
    </Container>
  );
};

export default App;
