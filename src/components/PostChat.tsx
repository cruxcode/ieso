import { useEffect, useState } from "react";
import { castApproval, getPost } from "../api/posts";
import { getUserRole } from "../api/user";
import { useAuth } from "../providers/ProvideAuth";
import { Button } from "./Button";

export interface PostChatProps {
	postID: string;
	username: string;
}

export const PostChat: React.FC<PostChatProps> = (props) => {
	const { token } = useAuth();
	const [post, setPost] = useState<any>();
	const [ranges, setRanges] = useState<string[]>([]);
	const [role, setRole] = useState<string>("");
	const [msg, setMsg] = useState<string>("");
	const [approved, setApproved] = useState<boolean>(false);
	const [approvalNumber, setApprovalNumber] = useState<number>(0);
	useEffect(() => {
		if (token)
			getPost(props.postID, token).then((resp: any) => {
				console.log(resp);
				if (resp.success) {
					setPost(resp.post.post);
					if (
						resp.post &&
						resp.post.approvals &&
						resp.post.approvals.length >= 2 &&
						!resp.post.rejected
					) {
						setApproved(true);
					} else {
						setApproved(false);
					}
					if (resp.post && resp.post.approvals)
						setApprovalNumber(resp.post.approvals.length);
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
	}, [token, setRanges, setPost, props.postID, setApproved]);
	useEffect(() => {
		if (token) {
			getUserRole(token).then((resp: any) => {
				if (resp.success && resp.role) {
					setRole(resp.role);
				}
			});
		}
	}, [token, setRole]);
	return (
		<div style={{ borderBottom: "1px solid #C4C4C4" }}>
			{post ? (
				<div>
					<div>
						<b>{props.username}</b>
					</div>
					<div style={{ marginTop: "0.5rem" }}>{post.feeling}</div>
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
									key={range}
								>
									{range}: {post[range]}
								</div>
							);
						})}
					</div>
				</div>
			) : null}
			{role === "moderator" && token ? (
				<div style={{ marginBottom: "0.5rem" }}>
					<Button
						style={{ marginRight: "1rem" }}
						onClick={async () => {
							const resp: any = await castApproval(
								props.postID,
								"reject",
								token!
							);
							console.log(resp);
							if (resp.success) {
								setMsg("Post rejected successfully");
							}
						}}
					>
						Reject
					</Button>
					{approved ? (
						"Post has been approved"
					) : (
						<>
							<Button
								style={{ paddingRight: "1rem" }}
								onClick={async () => {
									const resp: any = await castApproval(
										props.postID,
										"approve",
										token!
									);
									console.log(resp);
									if (resp.success) {
										setMsg("Post approved successfully");
									}
								}}
							>
								Approve
							</Button>
							<span>
								{`Approved by ${approvalNumber} moderators`}
							</span>
						</>
					)}
					{msg}
				</div>
			) : null}
		</div>
	);
};
