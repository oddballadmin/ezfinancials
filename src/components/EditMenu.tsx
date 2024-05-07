import React, { useState, useContext } from "react";
import { updateExpense, updateIncome, getIncome, getExpense } from "../helpers";
import ExpenseContext from "../context/ExpenseContext";
import IncomeContext from "../context/IncomeContext";
import "../component-styles/EditMenu.css";
type EditMenuProps = {
	name: string;
	amount: number;
	_id: string;
	modData: "Income" | "Expenses";
};

const EditMenu = ({ name, amount, _id, modData }: EditMenuProps) => {
	const incomeContext = useContext(IncomeContext);
	const expenseContext = useContext(ExpenseContext);

	const { setIncome } = incomeContext;
	const { setExpense } = expenseContext;
	const [data, setData] = useState({
		name: name,
		amount: amount,
		_id,
		modData,
	});

	const submit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, amount, _id } = data;

		if (modData === "Income") {
			await updateIncome({ name, amount, _id });
			const res = await getIncome();
			setIncome(res);
		}
		if (modData === "Expenses") {
			await updateExpense({ name, amount, _id });
			const res = await getExpense();
			setExpense(res);
		}
	};

	return (
		<form className="EditMenu" onSubmit={submit}>
			<div className="formRow">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder={name}
					value={data.name}
					onChange={(e) => {
						setData({ ...data, name: e.target.value });
					}}
				/>
			</div>
			<div className="formRow">
				<label htmlFor="amount">Amount:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					placeholder={amount.toString()}
					value={data.amount}
					onChange={(e) => {
						setData({ ...data, amount: parseFloat(e.target.value) });
					}}
				/>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
};

export default EditMenu;
