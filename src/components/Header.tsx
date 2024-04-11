import Profile from "./Profile";
import "../component-styles/Header.css";
const Header = () => {
	return (
		<div className="Header">
			<div className="brand">
				<h1>EZfinancials</h1>
				<small>Financial Dashboard</small>
			</div>
			<Profile />
		</div>
	);
};

export default Header;
