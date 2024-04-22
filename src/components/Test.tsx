import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Test = () => {
	useEffect(() => {
		axios
			.get("/incomes", { withCredentials: true })
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
