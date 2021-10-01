import React, { useEffect, useState } from "react";

export interface TextAreaProps {
	id: string;
	label: string;
	value: string;
	labelStyle?: React.CSSProperties;
	style?: React.CSSProperties;
	handlers?: any;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
	const [def, setDef] = useState<string>(props.value);
	useEffect(() => {
		setDef(props.value);
	}, [props.value, setDef]);
	return (
		<div>
			<label
				htmlFor={props.id}
				style={{ textAlign: "left", ...props.labelStyle }}
			>
				{props.label}
			</label>
			<textarea
				id={props.id}
				rows={4}
				style={{
					display: "block",
					width: "calc(100% - 1rem)",
					boxSizing: "border-box",
					resize: "none",
					...props.style,
				}}
				value={def}
				{...props.handlers}
			/>
		</div>
	);
};
