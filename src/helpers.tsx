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
		console.log(`/api/income/delete/${id}`);
		await axios.delete(`/api/income/delete/${id}`, { withCredentials: true });
	} catch (error) {
		console.log(error);
	}
};
export const deleteExpenseItem = async (id: string) => {
	try {
		await axios.delete(`/api/expenses/delete/${id}`, { withCredentials: true });
	} catch (error) {
		console.log(error);
	}
};
export const getIncome = async () => {
	try {
		const res = await axios.get("/api/income", { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getExpense = async () => {
	try {
		const res = await axios.get("/api/expenses", { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getSingleIncome = async (id: string) => {
	try {
		const res = await axios.get(`/api/income/${id}`, { withCredentials: true });
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getSingleExpense = async (id: string) => {
	try {
		const res = await axios.get(`/api/expenses/${id}`, {
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
		const response = await axios.post("/api/income/add", data, {
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
		const response = await axios.post("/api/expenses/add", data, {
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
		const response = await axios.patch(`/api/expenses/update/${_id}`, data, {
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
		const response = await axios.patch(`/api/income/update/${_id}`, data, {
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
