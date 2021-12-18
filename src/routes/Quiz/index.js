import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Question";
import ProgressBar from "../../components/ProgressBar";
import { useQuestions } from "../../contexts/QuestionsContext";
import { useResponses } from "../../contexts/ResponsesContext";
import Header from "../../components/Header";

export default function Quiz() {
	const { questions } = useQuestions();
	const { responses, setResponses } = useResponses();
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);
	const [userResponse, setUserResponse] = useState(null);

	useEffect(() => {
		navigate(`/quiz/${index}`);
		setUserResponse(null);
	}, [index]);

	useEffect(() => {
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

	// add the answer to the responses context, move to the next question
	const handleSubmitAnswer = () => {
		setResponses([...responses, userResponse]);
		handleNextButtonClick();
	};

	return (
		<>
			<Header>
				<ProgressBar />
			</Header>
			<h1>Quiz</h1>
			<Question entry={questions[index]} setUserResponse={setUserResponse} />
			<button onClick={() => handleNextButtonClick()}>Next</button>
			<button
				disabled={userResponse === null}
				onClick={() => handleSubmitAnswer()}
			>
				Submit
			</button>
		</>
	);
}
