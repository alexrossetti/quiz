import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Answer from "../Answer";

export default function Question({ entry, setUserResponse }) {
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		setSelected(null);
	}, [entry]);

	if (!entry) {
		return null;
	}

	const { category, type, question, correct_answer, incorrect_answers } = entry;
	const answers = [...incorrect_answers, correct_answer].sort();

	// TODO: update this to handle answers with multiple answers (if they exist)
	const handleAnswerClick = (index, userResponse) => {
		setSelected(selected === index ? null : index);
		setUserResponse(selected === index ? null : userResponse);
	};

	return (
		<div>
			<h2>{question}</h2>
			<h3>{category}</h3>
			<AnswerContainer>
				{answers.map((item, index) => {
					const isCorrect = item === correct_answer;
					const isSelected = index === selected;

					const userResponse = {
						isCorrect,
						answer: item,
					};

					return (
						<Answer
							isSelected={isSelected}
							handleClick={() => handleAnswerClick(index, userResponse)}
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
