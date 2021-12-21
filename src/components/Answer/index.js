import React from "react";
import styled from "styled-components";

export default function Answer({ handleClick, text, isSelected }) {
	return (
		<StyledAnswer isSelected={isSelected} onClick={() => handleClick()}>
			<span dangerouslySetInnerHTML={{ __html: text }}></span>
		</StyledAnswer>
	);
}

const StyledAnswer = styled.button`
	background: ${(props) => (props.isSelected ? "lightblue" : "white")};
	padding: 18px 30px;
	text-align: left;
	font-size: 1rem;
	border: 1px solid #aaa;
	border-radius: 5px;

	&:hover {
		background: #00ccff;
	}

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;
