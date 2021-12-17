import React, { useState } from "react";
import styled from "styled-components";
import Answer from "../Answer";

export default function Question({ entry }) {
	const [selected, setSelected] = useState(null);

	if (!entry) {
		return null;
	}

	const { category, type, question, correct_answer, incorrect_answers } = entry;
	const answers = [...incorrect_answers, correct_answer].sort();

	// TODO: update this to handle answers with multiple answers (if they exist)
	const handleAnswerClick = (index, isCorrect) => {
		setSelected(selected === index ? null : index);
	};

	return (
		<div>
			<h2>{question}</h2>
			<h3>{category}</h3>
			<AnswerContainer>
				{answers.map((item, index) => {
					const isCorrect = item === correct_answer;
					const isSelected = index === selected;

					return (
						<Answer
							isSelected={isSelected}
							handleClick={() => handleAnswerClick(index, isCorrect)}
							text={item}
							key={index}
						/>
					);
				})}
			</AnswerContainer>
		</div>
	);
}

const AnswerContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0px;
`;
