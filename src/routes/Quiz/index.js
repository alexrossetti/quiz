import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Quiz({ questions }) {
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		navigate(`/quiz/${index}`);
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

	console.log(questions);
	return (
		<>
			<h1>Quiz</h1>
			<button onClick={() => handleNextButtonClick()}>Next</button>
		</>
	);
}
