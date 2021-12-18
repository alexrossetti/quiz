import React from "react";
import styled from "styled-components";

export default function Header({ children }) {
	return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.header`
	height: 60px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	box-shadow: 0px 5px 8px #666;
`;
