import Navigation from "./Navigation";
import "../component-styles/Dashboard.css";
import CalculationModule from "./CalculationModule";
import Module from "./Utils/Module";
import Test from "./Test";

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<Navigation />
			<div className="contentSection">
				<Module>
					<CalculationModule />
					<Test />
				</Module>
			</div>
		</div>
	);
};

export default Dashboard;
