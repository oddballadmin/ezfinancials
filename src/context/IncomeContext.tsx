import React from "react";
import { createContext } from "react";

type IncomeType = {
	_id: string;
	name: string;
	createdOn: string;
	amount: number;
};
type IncomeArray = IncomeType[];

interface IncomeContextType {
	income: IncomeArray | null;
	setIncome: React.Dispatch<React.SetStateAction<IncomeArray | null>>;
}
const IncomeContext = createContext<IncomeContextType>({
	income: null,
	setIncome: () => {},
});

export const IncomeProvider = ({ children }: { children: React.ReactNode }) => {
	const [income, setIncome] = React.useState<IncomeArray | null>([
		{ _id: "Test", name: "Test", createdOn: "Test", amount: 0 },
	]);

	return (
		<IncomeContext.Provider value={{ income, setIncome }}>
			{children}
		</IncomeContext.Provider>
	);
};
export default IncomeContext;
