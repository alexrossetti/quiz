import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Themes, GlobalStyles } from "./styles.js";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";

const mockQuestions = [
	{ question: "Test question", answers: ["Ans 1", "Ans 2"] },
	{ question: "Test question", answers: ["Ans 1", "Ans 2"] },
];

export default function App() {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState([]);

	// TODO: use API request to get/set questions
	const getQuestions = () => {
		setQuestions([...mockQuestions]);
	};

	useEffect(() => {
		// when the questions are set, redirect to the quiz path and pass the questions to the quiz page
		if (questions.length > 0) {
			navigate("/quiz/0");
		}
	}, [questions]);

	return (
		<ThemeProvider theme={Themes["default"]}>
			<GlobalStyles />
			<Routes>
				<Route index path="/" element={<Home getQuestions={getQuestions} />} />
				<Route path="/quiz">
					<Route path=":id" element={<Quiz questions={questions} />} />
				</Route>
				<Route path="/results" element={<h1>Results</h1>} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</ThemeProvider>
	);
}
