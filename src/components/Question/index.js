import React from "react";

export default function Question({ entry }) {
	const { category, type, question, correct_answer, incorrect_answers } = entry;

	return (
		<div>
			<h2>{question}</h2>
			<h3>{category}</h3>
			{incorrect_answers.map((item) => {
				return <p>{item}</p>;
			})}
			<p>{correct_answer}</p>
		</div>
	);
}
