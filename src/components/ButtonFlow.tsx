import React from "react";

export interface ButtonFlowProps {
	id: string;
	text: string;
	style?: React.CSSProperties;
	onClick?: any;
}

export const ButtonFlow: React.FC<ButtonFlowProps> = (props) => {
	return (
		<button
			style={{ ...props.style }}
			onClick={() => {
				props.onClick();
			}}
		>
			{props.text}
		</button>
	);
};
