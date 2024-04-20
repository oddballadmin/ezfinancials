import "../component-styles/CalculationModule.css";
import NetModule from "./NetModule";
import ExpenseModule from "./ExpenseModule";
import IncomeModule from "./IncomeModule";
const CalculationModule = () => {
	return (
		<div className="CalculationModule">
			<IncomeModule />
			<ExpenseModule />
			<NetModule />
		</div>
	);
};

export default CalculationModule;
