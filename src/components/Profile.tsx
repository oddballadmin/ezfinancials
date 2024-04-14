import "../component-styles/Profile.css";
import { useState } from "react";
import Modal from "./Utils/Modal";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const Profile = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

	return (
		<div className="Profile">
			<div className="ProfileGroup">
				<h3>Guest</h3>
				<button
					onClick={() => {
						if (isSignUpModalOpen) return null;
						else {
							setIsLoginModalOpen(true);
						}
					}}
				>
					Login
				</button>

				<button
					onClick={() => {
						if (isLoginModalOpen) return null;
						else {
							setIsSignUpModalOpen(true);
						}
					}}
				>
					SignUp
				</button>
				<Modal
					isOpen={isLoginModalOpen}
					onClose={() => setIsLoginModalOpen(false)}
					title="Log In"
				>
					<LogIn />
				</Modal>

				<Modal
					isOpen={isSignUpModalOpen}
					onClose={() => setIsSignUpModalOpen(false)}
					title="Sign Up"
				>
					<SignUp />
				</Modal>
			</div>
		</div>
	);
};

export default Profile;
