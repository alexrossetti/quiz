import { createGlobalStyle } from "styled-components";

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

export const GlobalStyles = createGlobalStyle``;

const defaultTheme = {};

export const Themes = { default: defaultTheme };
