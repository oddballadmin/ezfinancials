import { useState } from "react";
import "../component-styles/LogIn.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const LogIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const logInUser = async (e: React.FormEvent) => {
		e.preventDefault();
		const { email, password } = data;
		try {
			const { data } = await axios.post("/login", { email, password });
			if (data.error) toast.error(data.error);
			else {
				toast.success("Logged In Successfully");
				setData({ email: "", password: "" });
			}
		} catch (error) {
			toast.error("Invalid Credentials");
		}
	};
	return (
		<>
			<form className="LogIn" onSubmit={logInUser}>
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
		</>
	);
};

export default LogIn;
