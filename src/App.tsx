import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/UserContext";

axios.defaults.baseURL = "http://localhost:8001";
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<>
			<div className="container">
				<UserContextProvider>
					<Header />
					<Toaster position="top-right" toastOptions={{ duration: 2000 }} />
					<Dashboard />
				</UserContextProvider>
			</div>
		</>
	);
};

export default App;
