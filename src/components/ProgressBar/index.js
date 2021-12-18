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

				return (
					<React.Fragment key={index}>
						<Dot isAnswered={isAnswered} isCorrect={isCorrect} />
						{index !== questions.length - 1 && (
							<Line isAnswered={isAnswered} isCorrect={isCorrect} />
						)}
					</React.Fragment>
				);
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
		!props.isAnswered ? "black" : props.isCorrect ? "green" : "red"};
	opacity: ${(props) => !props.isAnswered && "0.6"};

	&:not(:last-child) {
		margin-right: 5px;
	}
`;

const Line = styled.div`
	width: 15px;
	height: 2px;
	background: #333;
	border-radius: 5px;
	margin-right: 5px;
	background: ${(props) =>
		!props.isAnswered ? "black" : props.isCorrect ? "green" : "red"};
	opacity: ${(props) => !props.isAnswered && "0.6"};
`;
