export const reducer = (state, action) => {
	if (action.type === "FETCH_CATEGORY") {
		return {
			...state,
			categories: action.categories,
			category: action.category,
			loading: action.loading,
		};
	}
	if (action.type === "UPDATE") {
		if (action.payload.name === "amount") {
			return { ...state, amount: action.payload.value };
		}
		if (action.payload.name === "category") {
			return { ...state, category: action.payload.value };
		}
		if (action.payload.name === "difficulty") {
			return { ...state, difficulty: action.payload.value };
		}
	}
	if (action.type === "FETCH_DATA") {
		return {
			...state,
			allQuiz: action.allQuiz,
			active: action.active,
			showResults: false,
		};
	}
	if (action.type === "NEXT") {
		if (state.allQuiz.length - 1 !== state.index) {
			const newIndex = state.index + 1;
			return {
				...state,
				index: newIndex,
			};
		}

		if (state.allQuiz.length - 1 === state.index) {
			const newPercent = Math.floor(
				(state.correct / state.allQuiz.length) * 100
			);

			return {
				...state,
				percent: newPercent,
				showResults: true,
				active: false,
			};
		}
	}
	if (action.type === "CORRECT_MARK") {
		if (state.allQuiz[state.index].correct_answer === action.payload) {
			const newCorrect = state.correct + 1;
			return {
				...state,
				correct: newCorrect,
			};
		}
	}
	if (action.type === "REPLAY") {
		return {
			...state,
			active: false,
			showResults: false,
			amount: 1,
			difficulty: "easy",
			category: 9,
			correct: 0
		};
	}
	return state;
};
