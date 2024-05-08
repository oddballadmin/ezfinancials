import axios from "axios";
type dataType = {
	name: string;
	amount: number;
	_id?: string;
	category?: string;
};

export const convertToUsd = (value: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const deleteIncomeItem = async (id: string) => {
	try {
		console.log(`/income/delete/${id}`);
		await axios.delete(`/income/delete/${id}`, { withCredentials: true });
	} catch (error) {
		console.log(error);
	}
};
export const deleteExpenseItem = async (id: string) => {
	try {
		await axios.delete(`/expenses/delete/${id}`, { withCredentials: true });
	} catch (error) {
		console.log(error);
	}
};
export const getIncome = async () => {
	try {
		const res = await axios.get("/income", { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getExpense = async () => {
	try {
		const res = await axios.get("/expenses", { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getSingleIncome = async (id: string) => {
	try {
		const res = await axios.get(`/income/${id}`, { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getSingleExpense = async (id: string) => {
	try {
		const res = await axios.get(`/expenses/${id}`, {
			withCredentials: true,
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addIncome = async ({ name, amount, category }: dataType) => {
	const data = { name, amount, category };

	const newEntry = JSON.stringify(data);
	console.log(newEntry);
	try {
		const response = await axios.post("/income/add", data, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});
		console.log("Success:", response.data);
	} catch (error) {
		console.log(error);
	}
};

export const addExpense = async ({ name, amount, category }: dataType) => {
	const data = { name, amount, category };

	const newEntry = JSON.stringify(data);
	console.log(newEntry);
	try {
		const response = await axios.post("/expenses/add", data, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});
		console.log("Success:", response.data);
	} catch (error) {
		console.log(error);
	}
};

export const updateExpense = async ({ name, amount, _id }: dataType) => {
	const data = { name, amount, _id };

	const newEntry = JSON.stringify(data);
	console.log(newEntry);
	try {
		const response = await axios.patch(`/expenses/update/${_id}`, data, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});
		console.log("Success:", response.data);
	} catch (error) {
		console.log(error);
	}
};
export const updateIncome = async ({ name, amount, _id }: dataType) => {
	const data = { name, amount, _id };

	const newEntry = JSON.stringify(data);
	console.log(newEntry);
	try {
		const response = await axios.patch(`/income/update/${_id}`, data, {
			headers: {
				"Content-Type": "application/json",
			},
			withCredentials: true,
		});
		console.log("Success:", response.data);
	} catch (error) {
		console.log(error);
	}
};
