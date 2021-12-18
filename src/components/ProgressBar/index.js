import React from "react";
import styled from "styled-components";
import { useQuestions } from "../../contexts/QuestionsContext";
import { useResponses } from "../../contexts/ResponsesContext";

export default function ProgressBar() {
	const { responses } = useResponses();
	const { questions } = useQuestions();

	const resLength = responses.length;

	return (
		<Wrapper>
			{questions.map((question, index) => {
				const isAnswered = index <= resLength - 1;
				const isCorrect = isAnswered ? responses[index].isCorrect : null;

				return <Dot isAnswered={isAnswered} isCorrect={isCorrect} />;
			})}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Dot = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: ${(props) =>
		!props.isAnswered ? "blue" : props.isCorrect ? "green" : "red"};

	&:not(:last-child) {
		margin-right: 5px;
	}
`;
