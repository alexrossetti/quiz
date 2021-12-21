import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Home({ getQuestions }) {
	return (
		<>
			<Header>Quiz</Header>
			<Container>
				<Button handleClick={getQuestions}>Start quiz</Button>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	button {
		font-size: 1rem;
	}
`;
