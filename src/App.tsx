import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
const App = () => {
	return (
		<div className="container">
			<Header />
			<div>
				<Navigation />
				<Profile />
			</div>
			<Dashboard />
		</div>
	);
};

export default App;
