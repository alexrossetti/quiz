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
		<Wrapper>
			<h2>{category}</h2>
			<h1>{question}</h1>
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
		</Wrapper>
	);
}

const Wrapper = styled.div`
	h2 {
		font-size: 1.25rem;
		padding-bottom: 10px;
		border-bottom: 2px solid ${(props) => props.theme.fontPrimary};
		margin-bottom: 10px;
		margin-top: 10px;
	}

	h1 {
		font-size: 1.5rem;
		line-height: 1.75rem;
		margin-bottom: 30px;
	}
`;
const AnswerContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0px 30px;
`;
