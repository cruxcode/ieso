import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { castCommentApproval, getComment } from "../api/comments";
import { getUserRole } from "../api/user";
import { useAuth } from "../providers/ProvideAuth";
import { Button } from "./Button";

export interface CommentChatProps {
	commentID: string;
	username: string;
}
export const CommentChat: React.FC<CommentChatProps> = (props) => {
	const { token } = useAuth();
	const [comment, setComment] = useState<any>();
	const [role, setRole] = useState<string>("");
	const [msg, setMsg] = useState<string>("");
	const [approved, setApproved] = useState<boolean>(false);
	const [approvalNumber, setApprovalNumber] = useState<number>(0);
	const history = useHistory();
	useEffect(() => {
		if (token)
			getComment(props.commentID, token).then((resp: any) => {
				console.log(resp);
				if (resp.success) {
					setComment(resp.comment.comment);
					if (
						resp.comment &&
						resp.comment.approvals &&
						resp.comment.approvals.length >= 2 &&
						!resp.comment.rejected
					) {
						setApproved(true);
					} else {
						setApproved(false);
					}
					if (resp.comment && resp.comment.approvals)
						setApprovalNumber(resp.comment.approvals.length);
				}
			});
	}, [token, setComment, props.commentID, setApproved]);
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
			{comment ? (
				<div>
					<div>
						<b>{props.username}</b>
					</div>
					<div
						style={{ marginTop: "0.5rem" }}
						onClick={() => {
							history.push(`/post?postID=${comment.postID}`);
						}}
					>
						Comment: {comment}
					</div>
				</div>
			) : null}
			{role === "moderator" && token ? (
				<div style={{ marginBottom: "0.5rem" }}>
					<Button
						style={{ marginRight: "1rem" }}
						onClick={async () => {
							const resp: any = await castCommentApproval(
								props.commentID,
								"reject"
							);
							console.log(resp);
							if (resp.success) {
								setMsg("Comment rejected successfully");
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
									const resp: any = await castCommentApproval(
										props.commentID,
										"approve"
									);
									console.log(resp);
									if (resp.success) {
										setMsg("Comment approved successfully");
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
