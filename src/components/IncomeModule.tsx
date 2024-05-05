import { useEffect, useMemo, useState, useContext } from "react";
import axios from "axios";
import ModuleOptions from "./ModuleOptions";
import { useModuleContext } from "../context/OptionsContext";
import IncomeContext from "../context/IncomeContext";
import { convertToUsd } from "../helpers";
import ModuleList from "./ModuleList";
import ModuleListItemGroup from "./ModuleListItemGroup";
const IncomeModule = () => {
	const { income, setIncome } = useContext(IncomeContext);
	const [incomeTotal, setIncomeTotal] = useState<number>(0);

	const fetchData = async () => {
		try {
			const res = await axios.get("/api/income", { withCredentials: true });
			console.log(res.data);
			setIncome(res.data);
			// Change the type to IncomeType[]
		} catch (error) {
			console.log(error);
		}
	};
	const context = useModuleContext();

	// This effect sets the module target whenever parentTarget changes
	useEffect(() => {
		if (context) {
			context.setModuleTarget("Income");
		}
	}, [context]);
	useEffect(() => {
		fetchData();
	}, []);

	useMemo(() => {
		if (!income) return;
		setIncomeTotal(income.reduce((acc, income) => acc + income.amount, 0));
	}, [income]);

	return (
		<div className="moduleContainer">
			<div className="amount">{convertToUsd(incomeTotal)}</div>
			<hr />
			<div className="header">
				<h4 className="title">Income</h4>
				<ModuleOptions mTarget="Income" />
			</div>
			<div className="content">
				{context?.showAllIncome && income && (
					<ModuleList>
						<ModuleListItemGroup modData="Income" />
					</ModuleList>
				)}
			</div>
		</div>
	);
};

export default IncomeModule;
