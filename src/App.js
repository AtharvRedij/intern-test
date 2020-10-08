import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Message from "./components/Message";
import Loader from "./components/Loader";
import QuestionCard from "./components/QuestionCard";
import QuestionModal from "./components/QuestionModal";
import { listQuestions } from "./store/actions/questions";

const App = () => {
  const dispatch = useDispatch();

  // data from redux store
  const { questionId } = useSelector((state) => state.modal);
  const questionsList = useSelector((state) => state.questionsList);

  // data for UI
  const { loading, error, questions } = questionsList;

  const question = questions.find(
    (question) => question.question_id === questionId
  );

  useEffect(() => {
    dispatch(listQuestions());
  }, [dispatch]);

  return (
    <Container className=" justify-content-md-center">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* modal */}
          {questionId && (
            <QuestionModal
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
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default App;
