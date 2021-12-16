import React from "react";
import { Link } from "react-router-dom";

export default function Home({ getQuestions }) {
	return (
		<>
			<button onClick={() => getQuestions()}>Start quiz</button>
		</>
	);
}
