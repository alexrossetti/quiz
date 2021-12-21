import styled, { createGlobalStyle } from "styled-components";

const breakpoints = {
	tablet: 768,
	laptop: 1024,
	desktop: 1440,
};

export const devices = {
	tablet: `@media (min-width: ${breakpoints.tablet}px)`,
	laptop: `@media (min-width: ${breakpoints.laptop}px)`,
	desktop: `@media (min-width: ${breakpoints.desktop}px)`,
};

export const GlobalStyles = createGlobalStyle`
	html, body {
		color: ${(props) => props.theme.fontPrimary}
	}
`;

const defaultTheme = {
	backgroundPrimary: "#ffffff",
	headerBackground: "#ffffff",
	fontPrimary: "#333333",
	buttonPrimaryBackground: "#ffffff",
	buttonPrimaryBorder: "purple",
	buttonPrimaryHover: "darkblue",
	buttonPrimaryHoverColor: "white",
};

// other: C4D7F2, AFDEDC
const darkTheme = {
	backgroundPrimary: "#2A2536",
	backgroundSecondary: "#5C5275",
	headerBackground: "#5C5275",
	fontPrimary: "#F0F7EE",
	buttonPrimaryBackground: "#ffffff",
	buttonPrimaryBorder: "purple",
	buttonPrimaryHover: "darkblue",
	buttonPrimaryHoverColor: "white",
};

export const Themes = { default: defaultTheme, dark: darkTheme };

export const PageWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
