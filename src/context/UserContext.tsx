import axios from "axios";
import type { ReactNode } from "react";

import { createContext, useEffect, useState } from "react";
interface User {
	name: string;
	email: string;
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
	const [user, setUser] = useState<{
		name: string;
		email: string;
	} | null>(null);

	useEffect(() => {
		axios.get("/profile").then((res) => {
			setUser(res.data);
		});
	}, [user]);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
