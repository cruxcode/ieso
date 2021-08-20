import React, { ReactElement, useEffect, useState } from "react";
import meta from "./ieso-post-example.json";
import { TextBox } from "../../components/TextBox";
import { TextArea } from "../../components/TextArea";
import { RangeInput } from "../../components/RangeInput";

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
										updatedState[stateIndex] =
											event.target.value;
										return updatedState;
									});
								},
							}}
						/>,
					]);
				}
				if (child.view_type === "RangeSelector") {
					setState((value) => [...value, undefined]);
					const stateIndex = i;
					setUI((value) => [
						...value,
						<RangeInput
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
										updatedState[stateIndex] =
											event.target.value;
										return updatedState;
									});
								},
							}}
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
