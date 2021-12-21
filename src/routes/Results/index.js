import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import { useResponses } from "../../contexts/ResponsesContext";
import { PageWrapper } from "../../styles";

export default function Results() {
	const navigate = useNavigate();
	const { responses, setResponses } = useResponses();

	const correctAnswers =
		responses.length > 0
			? responses.filter((res) => res.isCorrect).length
			: null;

	useEffect(() => {
		if (!responses || responses.length === 0) {
			navigate("/");
		}
	}, []);

	return (
		<PageWrapper>
			<Header>
				<ProgressBar />
			</Header>
			<Content>
				<h1>
					You scored <br />
					{correctAnswers} / {responses.length}
				</h1>
				<button onClick={() => navigate("/")}>Back to start</button>
				<button
					onClick={() => {
						setResponses([]);
						navigate("/quiz/0");
					}}
				>
					Play again
				</button>
			</Content>
		</PageWrapper>
	);
}

const Content = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background: ${(props) => props.theme.backgroundPrimary};
	flex: 1;

	h1 {
		font-size: 1.75rem;
		line-height: 1.825rem;
		margin: 30px 0px;
	}

	button {
		&:not(:last-child) {
			margin-bottom: 10px;
		}
	}
`;
