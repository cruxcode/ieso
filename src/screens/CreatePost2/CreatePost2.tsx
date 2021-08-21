import React, { ReactElement, useEffect, useState } from "react";
import meta from "./ieso-post-example.json";
import { TextBox } from "../../components/TextBox";
import { TextArea } from "../../components/TextArea";
import { RangeInput } from "../../components/RangeInput";
import { RadioGroup } from "../../components/RadioGroup";

export interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = (props) => {
	/**
	 * one single state for one page
	 */
	const [state, setState] = useState<any[]>([]);
	/**
	 * UI to be updated
	 */
	const [UI, setUI] = useState<ReactElement[]>([]);
	/**
	 * generates UI from json
	 * convert it into Builder Pattern
	 */
	useEffect(() => {
		console.log(meta);
		const view = meta.views[0];
		for (let i = 0; view.children && i < view.children?.length; i++) {
			const child: any = view.children[i];
			const child_view: any = view.child_view;
			if (child_view) {
			} else {
				if (child.view_type === "TextBox") {
					setState((value) => [...value, undefined]);
					setUI((value) => [
						...value,
						<TextBox
							id={child.id}
							value={child.value}
							key={child.id}
							style={child.style}
						/>,
					]);
				}
				if (child.view_type === "TextArea") {
					setState((value) => [...value, undefined]);
					const stateIndex = i;
					setUI((value) => [
						...value,
						<TextArea
							id={child.id}
							label={child.label}
							value={child.value}
							key={child.id}
							handlers={{
								onChange: (
									event: React.ChangeEvent<HTMLInputElement>
								) => {
									setState((value) => {
										const updatedState: any[] = [...value];
										updatedState[stateIndex] = {
											value: event.target.value,
										};
										return updatedState;
									});
								},
							}}
							style={child.style}
							labelStyle={child.labelStyle}
						/>,
					]);
				}
				if (child.view_type === "RangeSelector") {
					setState((value) => [...value, { value: child.value }]);
					const stateIndex = i;
					setUI((value) => [
						...value,
						<RangeInput
							id={child.id}
							label={child.label}
							value={child.value}
							key={child.id}
							min={child.min}
							max={child.max}
							handlers={{
								onChange: (
									event: React.ChangeEvent<HTMLInputElement>
								) => {
									setState((value) => {
										const updatedState: any[] = [...value];
										updatedState[stateIndex] = {
											value: parseFloat(
												event.target.value
											),
										};
										return updatedState;
									});
								},
							}}
							style={child.style}
							labelStyle={child.labelStyle}
						/>,
					]);
				}
				if (child.view_type === "RadioGroup") {
					setState((value) => [
						...value,
						{
							exec: () => {
								return (
									document.querySelector(
										`input[name="${child.id}"]:checked`
									) as HTMLInputElement | undefined
								)?.value;
							},
						},
					]);
					const stateIndex = i;
					setUI((value) => [
						...value,
						<RadioGroup
							id={child.id}
							label={child.label}
							options={child.options}
							style={child.style}
							labelStyle={child.labelStyle}
							itemStyle={child.itemStyle}
							key={child.id}
						/>,
					]);
				}
			}
		}
	}, []);
	return (
		<>
			{UI.map((el) => el)}
			<button
				onClick={() => {
					console.log(state);
				}}
			>
				Show State
			</button>
		</>
	);
};
