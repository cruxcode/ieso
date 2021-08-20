import React from "react";

export interface TextBoxProps {
	id: string;
	value: string;
	style?: React.CSSProperties;
	handlers?: any;
}

export const TextBox: React.FC<TextBoxProps> = (props) => {
	return <div>{props.value}</div>;
};
