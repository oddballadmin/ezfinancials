import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8001";
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Toaster position="top-right" toastOptions={{ duration: 3000 }} />
				<Dashboard />
			</div>
		</>
	);
};

export default App;
