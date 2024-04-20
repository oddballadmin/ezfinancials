import React, { useState } from "react";

const ExpenseModule = () => {
	const [optionValue, setOptionValue] = useState<string>("add");
	const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		setOptionValue(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(optionValue);
	};
	return (
		<div className="moduleContainer">
			<div className="amount">$1,000</div>
			<hr />
			<div className="header">
				<h4 className="title">Expenses</h4>

				<form className="moduleOptions" onSubmit={onSubmit}>
					<select title="expenses" onChange={onChange}>
						<option value="add">Add</option>
						<option value="edit">Edit</option>
						<option value="rename">Rename</option>
						<option value="delete">Delete</option>
					</select>
					<button type="submit">Go</button>
				</form>
			</div>
		</div>
	);
};

export default ExpenseModule;