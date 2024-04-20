import "../../component-styles/utils/Module.css";

type ModuleProps = {
	children: React.ReactNode;
};

const Module = ({ children }: ModuleProps) => {
	return <div className="Module">{children}</div>;
};

export default Module;
