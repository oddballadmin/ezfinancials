import axios from "axios";
import type { ReactNode } from "react";

import { createContext, useEffect, useState } from "react";
interface User {
	name: string;
	email: string;
	expenses: [];
	incomes: [];
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

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				// First API call to get the user ID or other required data
				const profileResponse = await axios.get("/profile");
				const userId = profileResponse.data.id; // Make sure 'id' exists in your response

				// Second API call to get detailed user data
				if (userId) {
					const userDetailsResponse = await axios.get(`/${userId}`); // Adjust URL according to your API
					setUser(userDetailsResponse.data);
					console.log(userDetailsResponse.data);
				} else {
					console.error("User ID not found in profile data");
				}
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};
		fetchUserData();
	}, [setUser]);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
