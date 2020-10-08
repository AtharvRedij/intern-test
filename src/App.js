import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Message from "./components/Message";
import Loader from "./components/Loader";
import QuestionCard from "./components/QuestionCard";
import QuestionModal from "./components/QuestionModal";
import { listQuestions } from "./store/actions/questions";

const App = () => {
  const dispatch = useDispatch();

  const questionsList = useSelector((state) => state.questionsList);

  const { loading, error, questions } = questionsList;

  useEffect(() => {
    dispatch(listQuestions());
  }, [dispatch]);

  // selected question from 'Know more'
  const [question, setQuestion] = useState({});

  // modal show/hide
  const [showModal, setShowModal] = useState(false);

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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default App;
