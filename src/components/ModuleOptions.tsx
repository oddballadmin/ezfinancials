import "../component-styles/ModuleOptions.css";
import { useEffect, useState } from "react";
import { useModuleContext } from "../context/OptionsContext";
type ModuleOptionsProps = {
	mTarget: "Income" | "Expenses";
};
const ModuleOptions = ({ mTarget }: ModuleOptionsProps) => {
	const context = useModuleContext();

	// This effect sets the module target whenever parentTarget changes

	// Adding another useEffect to log the moduleTarget whenever it changes
	const { toggleShowExpenseEditMenu, toggleShowIncomeEditMenu } = context;
	const [modTarget, setModTarget] = useState(context.moduleTarget); // Update the type of modTarget
	const [isShowingAll, setIsShowingAll] = useState(false); // Tracks visibility toggle state

	useEffect(() => {
		setModTarget(mTarget);
	}, [mTarget]);
	if (!context) return null; // Ensure context is not null before rendering

	const onViewAllClick = () => {
		setIsShowingAll((prev) => !prev);
		if (modTarget === "Income") {
			console.log("View All Income");
			context.toggleShowAllIncome();
		}
		if (modTarget === "Expenses") {
			console.log("View All Expenses");
			context.toggleShowAllExpense();
		}
	};

	const onAddClick = () => {
		if (modTarget === "Income") {
			context.toggleShowAddIncomeMenu();
		}
		if (modTarget === "Expenses") {
			context.toggleShowAddExpenseMenu();
		}
	};

	const onEditClick = () => {
		if (modTarget === "Income") {
			toggleShowIncomeEditMenu();
		} else {
			toggleShowExpenseEditMenu();
		}
		console.log("Edit: ");
	};

	return (
		<div className="ModuleOptions">
			<button className="moduleOptions" onClick={onViewAllClick}>
				{isShowingAll ? `Hide` : `View All`}
			</button>
			<button className="moduleOptions" onClick={onAddClick}>
				Add
			</button>

			<button className="moduleOptions" onClick={onEditClick}>
				Edit
			</button>
		</div>
	);
};

export default ModuleOptions;
