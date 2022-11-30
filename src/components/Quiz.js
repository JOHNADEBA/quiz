import React from "react";
import { useGlobalContext } from "../services/context";

const Quiz = () => {
	const { allQuiz, index, correct, handleNext, getCorrectAnswer, amount } = useGlobalContext();
	const quiz = allQuiz[index];
    const allAnswers = [...quiz.incorrect_answers, quiz.correct_answer ]
	return (
		<div className="quiz-cont">
            <p className="correct">Correct Answers : {correct}/{amount}</p>
			<h3 className="question">{quiz.question}</h3>
			<div>
				{allAnswers.map((wrongAnswers, index) => {
					return <button onClick={()=>getCorrectAnswer(wrongAnswers)} className="answer" key={index}>{wrongAnswers}</button>;
				})}
			</div>
            <button onClick={handleNext} className="nextbtn">{allQuiz.length - 1 === index ? 'Get Results' : 'Next Question'}</button>
            <div className="clear"></div>
		</div>
	);
};

export default Quiz;
