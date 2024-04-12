import { useState } from "react";
import "../component-styles/LogIn.css";

const LogIn = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const logInUser = (e: React.FormEvent) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={logInUser}>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="Enter Your Email: "
					value={data.email}
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>

				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Enter Your Password: "
					value={data.password}
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>

				<div className="ButtonGroup">
					<button type="reset">Reset</button>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</>
	);
};

export default LogIn;
