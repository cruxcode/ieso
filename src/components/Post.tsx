import { useEffect, useState } from "react";

export interface PostProps {
	username: string;
	postID: string;
	post: any;
}

export const Post: React.FC<PostProps> = (props) => {
	const [ranges, setRanges] = useState<any[]>([]);
	useEffect(() => {
		const keys = Object.keys(props.post);
		let ranges = [];
		for (let i = 0; i < keys.length; i++) {
			console.log(typeof props.post[keys[i]] === "number");
			if (
				typeof props.post[keys[i]] === "number" &&
				props.post[keys[i]] > 0
			) {
				ranges.push(keys[i]);
			}
		}
		setRanges(ranges);
	}, [setRanges, props.post]);
	return (
		<div style={{ backgroundColor: "white", padding: "1rem" }}>
			<div>
				<b>{props.username}</b>
			</div>
			<div style={{ marginTop: "0.5rem" }}>{props.post.feeling}</div>
			<div style={{ marginBottom: "0.5rem" }}>
				{ranges.map((range) => {
					return (
						<div
							style={{
								background: "black",
								color: "white",
								marginRight: "1rem",
								padding: "0.1rem 0.5rem",
								display: "inline-block",
								marginTop: "0.5rem",
							}}
						>
							{range}: {props.post[range]}
						</div>
					);
				})}
			</div>
		</div>
	);
};