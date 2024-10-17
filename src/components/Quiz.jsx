import { useApp } from '../context/AppContext';
import '../styles/quiz.scss';
import Question from './Question';
import QuestionsNotFound from './QuestionsNotFound';
import Score from './Score';

function Quiz() {
  const { state } = useApp();
  const { currentQuestionIndex, questions } = state;

  if (questions.length === 0) {
    return <QuestionsNotFound />;
  }

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <>
          <Question />
        </>
      ) : (
        <>
          <Score />
        </>
      )}
    </>
  );
}

export default Quiz;
