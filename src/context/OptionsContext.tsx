import React, { createContext, useState, useContext, useMemo } from "react";

type ModuleContextType = {
	showIncomeEditMenu: boolean;
	showExpenseEditMenu: boolean;

	showAllIncome: boolean;
	showAllExpense: boolean;

	showAddIncomeMenu: boolean;
	showAddExpenseMenu: boolean;

	setShowIncomeEditMenu: React.Dispatch<React.SetStateAction<boolean>>;
	setShowExpenseEditMenu: React.Dispatch<React.SetStateAction<boolean>>;

	setShowAllIncome: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAllExpense: React.Dispatch<React.SetStateAction<boolean>>;

	toggleShowIncomeEditMenu: () => void;
	toggleShowExpenseEditMenu: () => void;

	toggleShowAddIncomeMenu: () => void;
	toggleShowAddExpenseMenu: () => void;

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
	const [showIncomeEditMenu, setShowIncomeEditMenu] = useState(false);
	const [showExpenseEditMenu, setShowExpenseEditMenu] = useState(false);
	const [moduleTarget, setModuleTarget] = useState<"Income" | "Expenses">(
		"Income"
	);

	const [showAddIncomeMenu, setShowAddIncomeMenu] = useState(false);
	const [showAddExpenseMenu, setShowAddExpenseMenu] = useState(false);

	const toggleShowAddIncomeMenu = () =>
		setShowAddIncomeMenu(!showAddIncomeMenu);
	const toggleShowAddExpenseMenu = () =>
		setShowAddExpenseMenu(!showAddExpenseMenu);

	const toggleShowAllIncome = () => setShowAllIncome(!showAllIncome);
	const toggleShowAllExpense = () => setShowAllExpense(!showAllExpense);
	const toggleShowIncomeEditMenu = () =>
		setShowIncomeEditMenu(!showIncomeEditMenu);
	const toggleShowExpenseEditMenu = () =>
		setShowExpenseEditMenu(!showExpenseEditMenu);

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
			showIncomeEditMenu,
			toggleShowIncomeEditMenu,
			setShowIncomeEditMenu,
			toggleShowExpenseEditMenu,
			showExpenseEditMenu,
			setShowExpenseEditMenu,
			showAddIncomeMenu,
			showAddExpenseMenu,
			toggleShowAddIncomeMenu,
			toggleShowAddExpenseMenu,
		}),
		[
			showAllIncome,
			showAllExpense,
			moduleTarget,
			showIncomeEditMenu,
			showExpenseEditMenu,
			showAddIncomeMenu,
			showAddExpenseMenu,
		]
	);
	return (
		<ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
	);
};
export const useModuleContext = () => useContext(ModuleContext);
