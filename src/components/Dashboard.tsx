import Navigation from "./Navigation";
import "../component-styles/Dashboard.css";
import CalculationModule from "./CalculationModule";
import Module from "./Utils/Module";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
const Dashboard = () => {
	const { user, setUser } = useContext(UserContext);
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
	console.log("Dashboard Render: User is", user);

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
