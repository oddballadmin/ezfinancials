import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
const App = () => {
	return (
		<div className="container">
			<Header />

			<Dashboard />
		</div>
	);
};

export default App;
