import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Results() {
	const navigate = useNavigate();

	return (
		<>
			<h1>Results</h1>
			<button onClick={() => navigate("/")}>Back to start</button>
		</>
	);
}
