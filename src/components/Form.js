import React from "react";
import { useGlobalContext } from "../services/context";
const Form = () => {
	const { categories, difficulty, category, amount, handleChange, handleSubmit } =
		useGlobalContext();
	return (
		<form onSubmit={handleSubmit}>
			<div className="top-header">
				<h2>QUIZ...</h2>
				<div className="cont-form">
					<label htmlFor="amount">Number Of Questions</label> <br />
					<input
						className="item number"
						id="amount"
						type="number"
						value={amount}
						name="amount"
						onChange={handleChange}
						min={1}
						max={50}
					/>
				</div>

				<div className="cont-form">
					<label htmlFor="category">Category</label>
					<br />
					<select
						className="item"
						onChange={handleChange}
						value={category}
						name="category"
						id="category"
					>
						{categories.length > 0 &&
							categories.map((category) => (
								<option key={category.id} value={category.id}>
									{category.name}
								</option>
							))}
					</select>
				</div>

				<div className="cont-form">
					<label htmlFor="difficulty">Difficulty</label>
					<br />
					<select
						className="item"
						name="difficulty"
						id="difficulty"
						onChange={handleChange}
						value={difficulty}
					>
						<option defaultValue value="easy">
							Easy
						</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>

				<button type="submit">Start</button>
			</div>
		</form>
	);
};

export default Form;
