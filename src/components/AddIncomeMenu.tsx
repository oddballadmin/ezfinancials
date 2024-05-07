import { FormEvent, useState, useContext } from "react";
import { addIncome, getIncome } from "../helpers";
import IncomeContext from "../context/IncomeContext";
import "../component-styles/AddMenu.css";
type AddIncomeMenuStateProps = {
	name: string;
	amount: number;
	category: string;
};

const AddIncomeMenu = () => {
	const context = useContext(IncomeContext);
	// Initialize formData with default values for each field
	const [formData, setFormData] = useState<AddIncomeMenuStateProps>({
		name: "",
		amount: 0,
		category: "",
	});

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newIncomeObj = {
			...formData,
			amount: formData.amount,
		};
		await addIncome(newIncomeObj);
		if (context.income === null) return;
		context.setIncome(await getIncome());
		setFormData({ name: "", amount: 0, category: "" });
	};

	return (
		<div className="AddMenu">
			<h4>Add Income</h4>

			<form onSubmit={submit}>
				<div className="formItem">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						id="name"
						value={formData.name} // Bind value to state
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div className="formItem">
					<label htmlFor="amount">Amount:</label>
					<input
						type="number"
						name="amount"
						id="amount"
						value={formData.amount} // Bind value to state
						onChange={(e) =>
							setFormData({
								...formData,
								amount: parseFloat(e.target.value) || 0,
							})
						}
					/>
				</div>
				<div className="formItem">
					<label htmlFor="category">Category:</label>
					<input
						type="text"
						name="category"
						id="category"
						value={formData.category} // Bind value to state
						onChange={(e) =>
							setFormData({ ...formData, category: e.target.value })
						}
					/>
				</div>

				<button type="submit">Submit</button>
				<button
					type="reset"
					onClick={() => setFormData({ name: "", amount: 0, category: "" })}
				>
					Reset
				</button>
			</form>
		</div>
	);
};

export default AddIncomeMenu;
