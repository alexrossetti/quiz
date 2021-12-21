import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Header from "../../components/Header";
import useTheme from "../../hooks/useTheme";
import { PageWrapper } from "../../styles";

export default function Home({ getQuestions, toggleTheme }) {
	return (
		<PageWrapper>
			<Header>Quiz</Header>
			<Container>
				<Button handleClick={getQuestions}>Start quiz</Button>
				<Button handleClick={toggleTheme}>ToggleTheme</Button>
			</Container>
		</PageWrapper>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 50px;
	background: ${(props) => props.theme.backgroundPrimary};
	flex: 1;

	button {
		font-size: 1rem;
	}
`;
