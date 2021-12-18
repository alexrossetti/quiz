import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
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
			<Header>
				<ProgressBar />
			</Header>
			<h1>Results</h1>
			<button onClick={() => navigate("/")}>Back to start</button>
		</>
	);
}
