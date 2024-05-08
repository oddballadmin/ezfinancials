import axios from "axios";
import type { ReactNode } from "react";

import { createContext, useEffect, useState } from "react";
// type ExpenseType = {
// 	id: string;
// 	title: string;
// 	amount: number;
// 	category: string;
// };
// type IncomeType = {
// 	id: string;
// 	title: string;
// 	amount: number;
// 	category: string;
// };

interface User {
	id: string;
	name: string;
	email: string;
	_id: string;
}

interface UserContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	// const changeUser = (newUser: User) => {
	// 	setUser((prevUser) => ({ ...prevUser, ...newUser }));
	// };
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
				setUser((prevUser) => ({ ...prevUser, ...userData }));
				console.log("User data set in context:", userData);
			} else {
				console.error("User data is incomplete:", profileResponse.data);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	useEffect(() => {
		fetchUserData();
	}, [setUser, user]);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
