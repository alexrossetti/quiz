import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Question";
import { useQuestions } from "../../contexts/QuestionsContext";

export default function Quiz() {
	const { questions } = useQuestions();
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		navigate(`/quiz/${index}`);
	}, [index]);

	useEffect(() => {
		console.log(questions);
		if (!questions || questions.length === 0) {
			navigate("/");
		}
	}, [questions]);

	const handleNextButtonClick = () => {
		if (index + 1 === questions.length) {
			navigate("/results");
		} else {
			setIndex(index + 1);
		}
	};

	return (
		<>
			<h1>Quiz</h1>
			<Question entry={questions[index]} />
			<button onClick={() => handleNextButtonClick()}>Next</button>
		</>
	);
}
