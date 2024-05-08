import { useContext, useState, useEffect } from "react";
import "../component-styles/LogIn.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const LogIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
	const { setUser } = useContext(UserContext);

	useEffect(() => {
		if (isLoggedIn) {
			const fetchUserData = async () => {
				try {
					const profileResponse = await axios.get("/profile", {
						withCredentials: true,
					});
					if (profileResponse.data && profileResponse.data._id) {
						const userData = {
							...profileResponse.data,
							id: profileResponse.data._id,
						};
						setUser(userData);
						console.log("User data set in context:", userData);
					} else {
						console.error("User data is incomplete:", profileResponse.data);
					}
				} catch (error) {
					console.error("Error fetching user data:", error);
				}
			};
			fetchUserData();
		}
	}, [isLoggedIn, setUser]); // Depend on isLoggedIn to trigger fetch

	const logInUser = async (e: React.FormEvent) => {
		e.preventDefault();
		const { email, password } = data;
		try {
			const response = await axios.post("/login", { email, password });
			const { data } = response; // Deconstruct data from the response
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success("Logged In Successfully");
				setData({ email: "", password: "" }); // Reset form data
				setIsLoggedIn(true); // Set logged in state to true to trigger useEffect
			}
		} catch (error) {
			toast.error("Invalid Credentials");
			setIsLoggedIn(false); // Ensure logged in state is false on failure
		}
	};

	return (
		<div className="LogIn">
			<form onSubmit={logInUser}>
				<div className="InputGroup">
					<label htmlFor="email">Email</label>
					<input
						name="email"
						type="email"
						placeholder="Enter Your Email: "
						value={data.email}
						onChange={(e) => setData({ ...data, email: e.target.value })}
					/>
				</div>
				<div className="InputGroup">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						placeholder="Enter Your Password: "
						value={data.password}
						onChange={(e) => setData({ ...data, password: e.target.value })}
					/>
				</div>

				<div className="ButtonGroup">
					<button type="reset">Reset</button>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
