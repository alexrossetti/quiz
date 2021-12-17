import { createContext, useContext, useState } from "react";

const ResponsesStateContext = createContext();
const ResponsesDispatchContext = createContext();

export function ResponsesProvider({ children }) {
	const [responses, setResponses] = useState([]);
	return (
		<ResponsesStateContext.Provider value={responses}>
			<ResponsesDispatchContext.Provider value={setResponses}>
				{children}
			</ResponsesDispatchContext.Provider>
		</ResponsesStateContext.Provider>
	);
}

export function useResponses() {
	const responses = useContext(ResponsesStateContext);
	const setResponses = useContext(ResponsesDispatchContext);

	return { responses, setResponses };
}
