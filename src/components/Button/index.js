import React from "react";
import styled from "styled-components";

export default function Button({ handleClick, children }) {
	return (
		<PrimaryButton
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === "Space") {
					handleClick();
				}
			}}
			onClick={() => handleClick()}
		>
			{children}
		</PrimaryButton>
	);
}

const PrimaryButton = styled.button`
	border: 1px solid black;
	border-radius: 6px;
	padding: 10px 30px;
`;
