import Navigation from "./Navigation";
import "../component-styles/Dashboard.css";
import CalculationModule from "./CalculationModule";
import Module from "./Utils/Module";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<Navigation />
			<div className="contentSection">
				<Module>
					<CalculationModule />
				</Module>
			</div>
		</div>
	);
};

export default Dashboard;
