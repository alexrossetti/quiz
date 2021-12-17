import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { useResponses } from "../../contexts/ResponsesContext";

export default function Results() {
	const navigate = useNavigate();
	const { responses } = useResponses();

	useEffect(() => {
		if (!responses || responses.length === 0) {
			navigate("/");
		}
	}, []);

	return (
		<>
			<h1>Results</h1>
			<button onClick={() => navigate("/")}>Back to start</button>
		</>
	);
}
