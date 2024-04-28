import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

type IncomeType = {
	_id: number;
	name: string;
	createdOn: string;
	amount: number;
};

const IncomeModule = () => {
	const [incomes, setIncomes] = useState<IncomeType[]>([
		{ _id: 0, name: "", createdOn: "", amount: 0 },
	]);
	const [optionValue, setOptionValue] = useState<string>("add");
	const fetchData = async () => {
		try {
			const res = await axios.get("/api/income", { withCredentials: true });
			console.log(res.data);
			setIncomes(res.data); // Change the type to IncomeType[]
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

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
			<div className="amount">$1245</div>
			<hr />
			<div className="header">
				<h4 className="title">Income</h4>
				<div className="income-container">
					{incomes.map((income) => (
						<div key={income._id} className="income">
							<div className="income-name">{income.name}</div>
							<div className="income-amount">${income.amount}</div>
						</div>
					))}
				</div>
				<form className="moduleOptions" onSubmit={onSubmit}>
					<select title="income" onChange={onChange} value={optionValue}>
						<option value="view">View All</option>
						<option value="add">Add</option>
						<option value="edit">Edit</option>
						<option value="delete">Delete</option>
					</select>
					<button type="submit">Go</button>
				</form>
			</div>
		</div>
	);
};

export default IncomeModule;
