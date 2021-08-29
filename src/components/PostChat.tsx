import { useEffect, useState } from "react";
import { getPost } from "../api/posts";
import { useAuth } from "../providers/ProvideAuth";

export interface PostChatProps {
	postID: string;
	username: string;
}

export const PostChat: React.FC<PostChatProps> = (props) => {
	const { token } = useAuth();
	const [post, setPost] = useState<any>();
	const [ranges, setRanges] = useState<string[]>([]);
	useEffect(() => {
		if (token)
			getPost(props.postID, token).then((resp: any) => {
				console.log(resp);
				if (resp.success) {
					setPost(resp.post.post);
					const keys = Object.keys(resp.post.post);
					let ranges = [];
					for (let i = 0; i < keys.length; i++) {
						console.log(
							typeof resp.post.post[keys[i]] === "number"
						);
						if (
							typeof resp.post.post[keys[i]] === "number" &&
							resp.post.post[keys[i]] > 0
						) {
							ranges.push(keys[i]);
						}
					}
					setRanges(ranges);
				}
			});
	}, [token]);
	return (
		<div>
			{post ? (
				<div style={{ borderBottom: "1px solid #C4C4C4" }}>
					<div>
						<b>{props.username}</b>
					</div>
					<div style={{ marginTop: "0.5rem" }}>{post.feeling}</div>
					<div style={{ marginBottom: "1rem" }}>
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
									{range}: {post[range]}
								</div>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
};
