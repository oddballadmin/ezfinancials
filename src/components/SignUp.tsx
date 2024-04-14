import { useState } from "react";
import { FormEvent } from "react";
import "../component-styles/SignUp.css";
import axios from "axios";
import { toast } from "react-hot-toast";
const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		name: "",
		userName: "",
		password: "",
		password2: "",
	});

	const registerUser = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, password } = data;
		try {
			const { data } = await axios.post("/register", {
				name,
				email,
				password,
			});
			if (data.error) {
				toast.error(data.error);
				return;
			} else {
				setData({
					name: "",
					email: "",
					password: "",
					password2: "",
					userName: "",
				});
				toast.success("User Registered Successfully");
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<form className="SignUp" onSubmit={registerUser}>
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
				<label htmlFor="name">Full Name</label>
				<input
					name="name"
					type="text"
					placeholder="Enter Your Full Name: "
					value={data.name}
					onChange={(e) => setData({ ...data, name: e.target.value })}
				/>
			</div>
			<div className="InputGroup">
				<label htmlFor="userName">UserName</label>
				<input
					name="userName"
					type="text"
					placeholder="Enter Your UserName: "
					value={data.userName}
					onChange={(e) => setData({ ...data, userName: e.target.value })}
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

			<div className="InputGroup">
				<label htmlFor="password2">Confirm Password</label>
				<input
					name="password2"
					type="password"
					placeholder="Confirm Your Password: "
					value={data.password2}
					onChange={(e) => setData({ ...data, password2: e.target.value })}
				/>
			</div>

			<div className="ButtonGroup">
				<button type="reset">Reset</button>
				<button type="submit">Sign Up</button>
			</div>
		</form>
	);
};

export default SignUp;
