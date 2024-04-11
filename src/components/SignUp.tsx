import { useState } from "react";
import { FormEvent } from "react";

const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		fullName: "",
		userName: "",
		password: "",
		password2: "",
	});

	const registerUser = (e: MouseEvent) => {
		e.preventDefault();
		console.log(data);
	};
	return (
		<>
			<form onSubmit={(e: FormEvent<HTMLFormElement>) => registerUser(e)}>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="Enter Your Email: "
					value={data.email}
					onChange={(e) => setData({ ...data, email: e.target.value })}
				/>

				<label htmlFor="fullName">Full Name</label>
				<input
					name="fullName"
					type="text"
					placeholder="Enter Your Full Name: "
					value={data.fullName}
					onChange={(e) => setData({ ...data, fullName: e.target.value })}
				/>

				<label htmlFor="userName">UserName</label>
				<input
					name="userName"
					type="text"
					placeholder="Enter Your UserName: "
					value={data.userName}
					onChange={(e) => setData({ ...data, userName: e.target.value })}
				/>

				<label htmlFor="password">Password</label>
				<input
					name="password"
					type="password"
					placeholder="Enter Your Password: "
					value={data.password}
					onChange={(e) => setData({ ...data, password: e.target.value })}
				/>

				<label htmlFor="password2">Confirm Password</label>
				<input
					name="password2"
					type="password"
					placeholder="Confirm Your Password: "
					value={data.password2}
					onChange={(e) => setData({ ...data, password2: e.target.value })}
				/>
				<div className="ButtonGroup">
					<button type="reset">Reset</button>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</>
	);
};

export default SignUp;
