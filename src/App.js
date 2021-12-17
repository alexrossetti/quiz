import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Themes, GlobalStyles } from "./styles.js";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import Results from "./routes/Results";
import { mockQuestions } from "./routes/Quiz/mockQuestions.js";

const endpoint = "https://opentdb.com/api.php?amount=10";

export default function App() {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState([]);

	// TODO: use API request to get/set questions
	const getQuestions = () => {
		// setQuestions([...mockQuestions]);
		fetch(endpoint)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setQuestions(data.results);
			});
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
					<Route path=":id" element={<Quiz questions={mockQuestions} />} />
				</Route>
				<Route path="/results" element={<Results />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</ThemeProvider>
	);
}
