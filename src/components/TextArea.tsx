import React from "react";

export interface TextAreaProps {
	id: string;
	label: string;
	value: string;
	labelStyle?: React.CSSProperties;
	style?: React.CSSProperties;
	handlers?: any;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
	return (
		<div>
			<label
				htmlFor={props.id}
				style={{ textAlign: "left", ...props.labelStyle }}
			>
				{props.label}
			</label>
			<textarea
				rows={4}
				style={{
					display: "block",
					width: "calc(100% - 1rem)",
					boxSizing: "border-box",
					resize: "none",
					...props.style,
				}}
				defaultValue={props.value}
				{...props.handlers}
			/>
		</div>
	);
};
