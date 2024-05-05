import React from "react";
import "../component-styles/ModuleList.css";

const ModuleList = ({ children }: { children: React.ReactNode }) => {
	return <div className="ModuleList">{children}</div>;
};

export default ModuleList;
