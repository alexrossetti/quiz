import { createContext, useContext, useState } from "react";

const QuestionsStateContext = createContext();
const QuestionsDispatchContext = createContext();

export function QuestionsProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	return (
		<QuestionsStateContext.Provider value={questions}>
			<QuestionsDispatchContext.Provider value={setQuestions}>
				{children}
			</QuestionsDispatchContext.Provider>
		</QuestionsStateContext.Provider>
	);
}

export function useQuestions() {
	const questions = useContext(QuestionsStateContext);
	const setQuestions = useContext(QuestionsDispatchContext);

	return { questions, setQuestions };
}
