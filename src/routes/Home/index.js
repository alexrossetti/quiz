import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Home({ getQuestions }) {
	return (
		<>
			<Header>Quiz</Header>
			<button onClick={() => getQuestions()}>Start quiz</button>
		</>
	);
}
