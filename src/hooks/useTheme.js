import { useState } from "react";
import { Themes } from "../styles";

const options = Object.keys(Themes);

export default function useTheme() {
	const [theme, setTheme] = useState(options[0]);

	const toggleTheme = () => {
		const currentIndex = options.indexOf(theme);
		setTheme(options[(currentIndex + 1) % options.length]);
	};

	return { theme, setTheme, toggleTheme };
}
