import React from "react";
import { options } from "yargs";

export interface RadioGroupProps {
	id: string;
	label: string;
	options: { id: string; label: string; value: string; handlers?: any }[];
	labelStyle?: React.CSSProperties;
	itemStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
	const unwrap_handlers: (handlers: any) => {} = (handlers) => {
		const unwrapped: any = {};
		if (handlers) {
			const events = Object.keys(handlers);
			for (let i = 0; i < events.length; i++) {
				const eventName = events[i];
				const handler = handlers[eventName];
				unwrapped[eventName] = (event: any) => {
					const fn = eval(handler);
					fn.call(null, event);
				};
			}
		}
		return unwrapped;
	};
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
							{...unwrap_handlers(option.handlers)}
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
