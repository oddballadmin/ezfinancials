import React, { createContext, useState, useContext, useMemo } from "react";

type ModuleContextType = {
	showAllIncome: boolean;
	showAllExpense: boolean;
	setShowAllIncome: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAllExpense: React.Dispatch<React.SetStateAction<boolean>>;
	toggleShowAllIncome: () => void;
	toggleShowAllExpense: () => void;
	moduleTarget: "Income" | "Expenses";
	setModuleTarget: React.Dispatch<React.SetStateAction<"Income" | "Expenses">>;
};

export const ModuleContext = createContext<ModuleContextType>(
	{} as ModuleContextType
);

export const ModuleProvider = ({ children }: { children: React.ReactNode }) => {
	const [showAllIncome, setShowAllIncome] = useState(false);
	const [showAllExpense, setShowAllExpense] = useState(false);
	const [moduleTarget, setModuleTarget] = useState<"Income" | "Expenses">(
		"Income"
	);

	const toggleShowAllIncome = () => setShowAllIncome(!showAllIncome);
	const toggleShowAllExpense = () => setShowAllExpense(!showAllExpense);
	const value = useMemo(
		() => ({
			showAllIncome,
			showAllExpense,
			toggleShowAllIncome,
			toggleShowAllExpense,
			moduleTarget,
			setModuleTarget,
			setShowAllIncome,
			setShowAllExpense,
		}),
		[showAllIncome, showAllExpense, moduleTarget]
	);
	return (
		<ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
	);
};
export const useModuleContext = () => useContext(ModuleContext);
