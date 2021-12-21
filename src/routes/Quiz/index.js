import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/Question";
import ProgressBar from "../../components/ProgressBar";
import { useQuestions } from "../../contexts/QuestionsContext";
import { useResponses } from "../../contexts/ResponsesContext";
import Header from "../../components/Header";
import styled from "styled-components";
import { PageWrapper } from "../../styles";

export default function Quiz() {
	const { questions } = useQuestions();
	const { responses, setResponses } = useResponses();
	const navigate = useNavigate();
	const [index, setIndex] = useState(0);
	const [userResponse, setUserResponse] = useState(null);

	useEffect(() => {
		navigate(`/quiz/${index}`);
		setUserResponse(null);
	}, [index]);

	useEffect(() => {
		if (!questions || questions.length === 0) {
			navigate("/");
		}
	}, [questions]);

	const handleNextButtonClick = () => {
		if (index + 1 === questions.length) {
			navigate("/results");
		} else {
			setIndex(index + 1);
		}
	};

	// add the answer to the responses context, move to the next question
	const handleSubmitAnswer = () => {
		setResponses([...responses, userResponse]);
		handleNextButtonClick();
	};

	return (
		<PageWrapper>
			<Header>
				<ProgressBar />
			</Header>
			<Content>
				<Question entry={questions[index]} setUserResponse={setUserResponse} />
				<Submit
					disabled={userResponse === null}
					onClick={() => handleSubmitAnswer()}
				>
					Submit
				</Submit>
			</Content>
		</PageWrapper>
	);
}

const Content = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme.backgroundPrimary};
	flex: 1;
`;

const Submit = styled.button`
	border: 1px solid purple;
	background: white;
	padding: 15px;
	border-radius: 5px;
	width: 150px;
	cursor: default;

	&:not(:disabled) {
		&:hover {
			background: darkblue;
			color: white;
			cursor: pointer;
		}
	}
`;
