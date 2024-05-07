import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/UserContext";
import { IncomeProvider } from "./context/IncomeContext";
import { ExpenseProvider } from "./context/ExpenseContext";

const App = () => {
	axios.defaults.baseURL =
		"http://localhost:8001" ||
		"https://ezfinancials-s6e4-denr7jmm1-georges-projects-8c72f407.vercel.app" ||
		"https://ezfinancials-s6e4.vercel.app";
	axios.defaults.withCredentials = true;
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
