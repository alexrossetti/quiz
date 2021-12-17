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
	padding: 15px 30px;
	text-align: left;
`;
