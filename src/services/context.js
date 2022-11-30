import React, { useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";

const initialState = {
	allQuiz: [],
	index: 0,
	amount: 1,
	difficulty: "easy",
	category: 0,
	categories: [],
	loading: true,
	active: false,
	correct: 0,
	percent: 0,
	showResults: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchCategories = async () => {
		const data = await fetch("https://opentdb.com/api_category.php");
		const response = await data.json();
		dispatch({
			type: "FETCH_CATEGORY",
			categories: response.trivia_categories,
			loading: false,
			category: response.trivia_categories[0].id,
		});
	};
	const fetchData = async () => {
		const url = `https://opentdb.com/api.php?amount=${state.amount}&category=${state.category}&difficulty=${state.difficulty}&type=multiple`;

		const data = await fetch(url);
		const response = await data.json();
		dispatch({
			type: "FETCH_DATA",
			allQuiz: response.results,
			active: true,
		});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		dispatch({ type: "UPDATE", payload: { name, value } });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		fetchData();
	};

	const handleNext = () => {
		dispatch({ type: "NEXT" });
	};

	const getCorrectAnswer = (input) => {
		dispatch({ type: "CORRECT_MARK", payload: input });

		handleNext();
	};
	const replay = () => {
		dispatch({ type: "REPLAY" });
	};
	
	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				handleChange,
				handleSubmit,
				handleNext,
				replay,
				getCorrectAnswer,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
