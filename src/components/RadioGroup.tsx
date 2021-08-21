import React from "react";
import { options } from "yargs";

export interface RadioGroupProps {
	id: string;
	label: string;
	options: { id: string; label: string; value: string }[];
	labelStyle?: React.CSSProperties;
	itemStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
	return (
		<div id={props.id} style={{ ...props.style }}>
			{props.options.map((option) => {
				return (
					<div style={{ ...props.itemStyle }} key={option.id}>
						<input
							type="radio"
							id={option.id}
							name={props.id}
							value={option.value}
						/>
						<label
							htmlFor={option.id}
							style={{ ...props.labelStyle }}
						>
							{option.label}
						</label>
					</div>
				);
			})}
		</div>
	);
};
