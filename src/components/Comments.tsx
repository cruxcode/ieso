import React, { useEffect, useState } from "react";
import { getApprovedComments, sendComment } from "../api/comments";
import { getUserRole } from "../api/user";
import { useAuth } from "../providers/ProvideAuth";
import { Button } from "./Button";
import { TextArea } from "./TextArea";

export interface CommentsProps {
	postID: string;
}

export const Comments: React.FC<CommentsProps> = (props) => {
	const [comments, setComments] = useState<any>();
	const [currentText, setCurrentText] = useState("");
	const [msg, setMsg] = useState("");
	const [disabled, setDisabled] = useState<boolean>(false);
	const [role, setRole] = useState<string>("");
	const { token } = useAuth();
	useEffect(() => {
		getApprovedComments(props.postID)
			.then((comments: any) => {
				setComments(comments.comments.reverse());
			})
			.catch((err) => {
				console.log(err);
			});
	}, [setComments, props.postID]);
	useEffect(() => {
		if (token)
			getUserRole(token).then((resp: any) => {
				if (resp.success && resp.role) {
					setRole(resp.role);
				}
			});
	}, [setRole]);
	return (
		<div>
			<div style={{ marginBottom: "1em", fontWeight: "bold" }}>
				Comments
			</div>
			{comments && comments.length
				? comments.map((comment: any) => {
						return (
							<div
								style={{ marginBottom: "0.5em" }}
								key={comment._id}
							>
								<b>{comment.username}</b>&nbsp;&nbsp;&nbsp;
								{comment.comment}
							</div>
						);
				  })
				: null}
			<div style={{ position: "relative" }}>
				{msg ? <div>{msg}</div> : <br />}
				<div
					style={{
						display: "inline-block",
						width: "calc(100% - 6rem)",
					}}
				>
					<TextArea
						id={""}
						label={""}
						value={currentText}
						style={{}}
						handlers={{
							onChange: (
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setCurrentText(event.target.value);
							},
						}}
					/>
				</div>
				<div
					style={{
						display: "inline-block",
						position: "absolute",
						top: "50%",
						transform: "translate(0, -50%)",
					}}
				>
					<Button
						style={{}}
						onClick={() => {
							if (disabled) {
								return;
							}
							setDisabled(true);
							sendComment(currentText, props.postID)
								?.then((resp: any) => {
									if (resp.success) {
										setMsg(
											"Comment Submitted for Approval"
										);
									} else {
										setMsg(
											"Some error occured. Please try again later"
										);
									}
									setDisabled(false);
									setCurrentText("");
									if (role === "moderator")
										window.location.href =
											window.location.href;
								})
								.catch((err) => {
									console.log(err);
									setMsg(
										"Some error occured. Please try again later"
									);
									setDisabled(false);
									setCurrentText("");
								});
						}}
					>
						SEND
					</Button>
				</div>
			</div>
		</div>
	);
};
