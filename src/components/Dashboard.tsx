import Navigation from "./Navigation";
import "../component-styles/Dashboard.css";
const Dashboard = () => {
	return (
		<div className="Dashboard">
			<div className="NavSection">
				<Navigation />
			</div>
			<section className="ContentSection">Content</section>
		</div>
	);
};

export default Dashboard;
