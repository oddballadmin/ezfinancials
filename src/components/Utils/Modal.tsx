import React from "react";
import "../../component-styles/utils/Modal.css";
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;
	return (
		<div className="Modal">
			<div className="ModalHeader">
				<button onClick={onClose} className="CloseButton">
					Close
				</button>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default Modal;
