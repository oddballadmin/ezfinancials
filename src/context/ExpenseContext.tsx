import React from "react";
import { createContext } from "react";

type ExpenseType = {
	_id: string;
	name: string;
	createdOn: string;
	amount: number;
};
type ExpenseArray = ExpenseType[];

interface ExpenseContextType {
	expense: ExpenseArray | null;
	setExpense: React.Dispatch<React.SetStateAction<ExpenseArray | null>>;
}
const ExpenseContext = createContext<ExpenseContextType>({
	expense: null,
	setExpense: () => {},
});

export const ExpenseProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [expense, setExpense] = React.useState<ExpenseArray | null>([
		{ _id: "Test", name: "Test", createdOn: "Test", amount: 0 },
	]);

	return (
		<ExpenseContext.Provider value={{ expense, setExpense }}>
			{children}
		</ExpenseContext.Provider>
	);
};
export default ExpenseContext;
