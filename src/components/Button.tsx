import React from "react";

export interface ButtonProps {
	style: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button style={{ ...ButtonStyles, ...props.style }}>
			{props.children}
		</button>
	);
};

export const ButtonStyles: React.CSSProperties = {
	backgroundColor: "rgb(129, 164, 205)",
	color: "white",
	border: "none",
	fontSize: "1rem",
	padding: "0.2rem 1rem",
};
