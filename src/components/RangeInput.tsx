import React from "react";

export interface RangeInputProps {
	id: string;
	label: string;
	value: number;
	handlers?: any;
	style?: React.CSSProperties;
	min?: number;
	max?: number;
}

export const RangeInput: React.FC<RangeInputProps> = (props) => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type="range"
				style={{
					display: "block",
					width: "calc(100% - 1rem)",
					boxSizing: "border-box",
					resize: "none",
					...props.style,
				}}
				min={props.min || 0}
				max={props.max || 10}
				value={props.value}
				{...props.handlers}
			></input>
		</div>
	);
};
