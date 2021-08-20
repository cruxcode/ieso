import React from "react";

export interface TextBoxProps {
	id: string;
	value: string;
	style?: React.CSSProperties;
	handlers?: any;
}

export const TextBox: React.FC<TextBoxProps> = (props) => {
	return (
		<div style={{ textAlign: "left", ...props.style }}>{props.value}</div>
	);
};
