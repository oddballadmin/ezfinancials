import React from "react";
import "../../component-styles/utils/Modal.css";
import { VscChromeClose } from "react-icons/vsc";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title: string;
}
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) return null;
	return (
		<div className="Modal">
			<div className="ModalWrapper">
				<div className="ModalHeader">
					<h3>{title}</h3>
					<button
						onClick={onClose}
						className="CloseButton"
						type="button"
						aria-label="Close"
						title="Close"
					>
						<VscChromeClose />
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
