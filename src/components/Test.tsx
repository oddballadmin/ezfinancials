import { useEffect } from "react";
import axios from "axios";

const Test = () => {
	useEffect(() => {
		axios
			.get("/incomes", { withCredentials: true, method: "GET" })
			.then((response) => {
				console.log("DATA: ", response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return <div></div>;
};

export default Test;
