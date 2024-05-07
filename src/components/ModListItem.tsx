import "../component-styles/ModListItem.css";
import { convertToUsd } from "../helpers";
// import IncomeContext from "../context/IncomeContext";
// import ExpenseContext from "../context/ExpenseContext";
import ModListItemButtons from "./ModListItemButtons";
import { useModuleContext } from "../context/OptionsContext";

type ModListItemProps = {
	name: string;
	amount: number;
	modTarget: "Income" | "Expenses";
	_id: string;
};

const ModListItem = ({ name, amount, _id, modTarget }: ModListItemProps) => {
	const context = useModuleContext();
	const { showIncomeEditMenu, showExpenseEditMenu } = context;

	return (
		<div key={_id} className="ModListItem">
			<div className="info">
				<h4>{name}</h4>:<p>{convertToUsd(amount)}</p>
			</div>
			{showIncomeEditMenu && modTarget === "Income" && (
				<ModListItemButtons modTarget={modTarget} _id={_id} />
			)}
			{showExpenseEditMenu && modTarget === "Expenses" && (
				<ModListItemButtons modTarget={modTarget} _id={_id} />
			)}
		</div>
	);
};

export default ModListItem;
