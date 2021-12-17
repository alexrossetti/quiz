import React from "react";

export default function Question({ entry }) {
	if (!entry) {
		return null;
	}

	const { category, type, question, correct_answer, incorrect_answers } = entry;
	const answers = [...incorrect_answers, correct_answer].sort();

	return (
		<div>
			<h2>{question}</h2>
			<h3>{category}</h3>
			{answers.map((item, index) => {
				return <p key={index}>{item}</p>;
			})}
		</div>
	);
}
