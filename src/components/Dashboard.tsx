import "../component-styles/Dashboard.css";
import CalculationModule from "./CalculationModule";
import Module from "./Utils/Module";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ModuleProvider } from "../context/OptionsContext";
const Dashboard = () => {
	const { user } = useContext(UserContext);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	useEffect(() => {
		if (user == null) {
			setIsUserLoggedIn(false);
		} else {
			setIsUserLoggedIn(true);
		}
	}, [user]);

	if (!isUserLoggedIn) {
		return (
			<div>
				<h3>Please log in to utilize the user dashboard</h3>
			</div>
		);
	}

	return (
		<div className="Dashboard">
			<div className="contentSection">
				<Module>
					<ModuleProvider>
						<CalculationModule />
					</ModuleProvider>
				</Module>
			</div>
		</div>
	);
};

export default Dashboard;
