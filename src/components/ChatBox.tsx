import { useEffect, useRef, useState } from "react";
import { getChats, updateReadTime } from "../api/chat";
import { getPost } from "../api/posts";
import { useAuth } from "../providers/ProvideAuth";
import { ProvideSocket, useSocket } from "../providers/ProvideSocket";
import { Button } from "./Button";
import { CommentChat } from "./CommentChat";
import { PostChat } from "./PostChat";
import { TextArea } from "./TextArea";

export interface ChatBoxProps {
	roomID: string;
}

export const ChatBox: React.FC<ChatBoxProps> = (props) => {
	const { token } = useAuth();
	const [chats, setChats] = useState<any[]>([]);
	const [currentText, setCurrentText] = useState<string>("");
	const { socket } = useSocket();
	useEffect(() => {
		if (props.roomID && token) {
			getChats(props.roomID, token).then((resp: any) => {
				if (resp.success && resp.chats) {
					setChats(resp.chats);
				}
			});
		}
	}, [props.roomID, setChats, token]);
	useEffect(() => {
		const onTextMsg = (msg: any) => {
			console.log(msg);
			if (msg && msg.success && msg.msg) {
				setChats((chats: any[]) => {
					return [...chats, msg.msg];
				});
				setCurrentText("");
			}
		};
		socket.on("textmsg", onTextMsg);
		return () => {
			socket.off("textmsg", onTextMsg);
		};
	}, [setChats, setCurrentText]);
	useEffect(() => {
		if (token) updateReadTime(props.roomID, token);
	}, [props.roomID, token]);
	return (
		<div
			style={{
				height: "calc(100vh - 3em)",
				display: "grid",
				gridTemplateRows: "1fr 4em",
			}}
		>
			<div style={{ overflowY: "auto" }}>
				{chats.map((chat: any) => {
					if (chat.type === "posts") {
						return (
							<PostChat
								postID={chat.postID}
								username={chat.username}
								key={chat._id}
							/>
						);
					}
					if (chat.type === "comments") {
						return (
							<CommentChat
								commentID={chat.commentID}
								username={chat.username}
								key={chat._id}
							/>
						);
					} else {
						return (
							<div
								style={{ borderBottom: "1px solid #C4C4C4" }}
								key={chat._id}
							>
								<div>
									<b>{chat.username}</b>
								</div>
								<div>{chat.text}</div>
							</div>
						);
					}
				})}
			</div>
			<div style={{ position: "relative" }}>
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
							if (socket.connected) {
								socket.emit("textmsg", {
									token,
									text: currentText,
									roomID: props.roomID,
								});
							}
						}}
					>
						SEND
					</Button>
				</div>
			</div>
		</div>
	);
};
