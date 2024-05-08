import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/UserContext";
import { IncomeProvider } from "./context/IncomeContext";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
	if (import.meta.env.VITE_NODE_ENV == "development") {
		axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
	} else axios.defaults.baseURL = import.meta.env.VITE_PROD_API_BASE_URL;
	axios.defaults.withCredentials = true;
	console.log(axios.defaults.baseURL);
	return (
		<>
			<div className="container">
				<UserContextProvider>
					<IncomeProvider>
						<ExpenseProvider>
							<Header />
							<Toaster position="top-right" toastOptions={{ duration: 2000 }} />
							<Dashboard />
						</ExpenseProvider>
					</IncomeProvider>
				</UserContextProvider>
			</div>
		</>
	);
};

export default App;
