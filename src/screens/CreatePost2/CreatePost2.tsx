import React, { ReactElement, useEffect, useState } from "react";
import meta from "./ieso-post-example.json";
import { TextBox } from "../../components/TextBox";

export interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = (props) => {
	/**
	 * one single state for one page
	 */
	const [state, setState] = useState<any>({});
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
					setUI((value) => [
						...value,
						<TextBox
							id={child.id}
							value={child.value}
							key={child.id}
						/>,
					]);
				}
			}
		}
	}, []);
	return <>{UI.map((el) => el)}</>;
};
