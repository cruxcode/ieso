import { useEffect, useState } from "react";
import { getChats } from "../api/chat";
import { getPost } from "../api/posts";
import { useAuth } from "../providers/ProvideAuth";
import { ProvideSocket, useSocket } from "../providers/ProvideSocket";
import { Button } from "./Button";
import { PostChat } from "./PostChat";
import { TextArea } from "./TextArea";

export interface ChatBoxProps {
	roomID: string;
}

export const ChatBox: React.FC<ChatBoxProps> = (props) => {
	const { token } = useAuth();
	const [chats, setChats] = useState([]);
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
		};
		socket.on("textmsg", onTextMsg);
		return () => {
			socket.off("textmsg", onTextMsg);
		};
	}, []);
	return (
		<div style={{ height: "calc(100%)" }}>
			<div style={{ height: "calc(100% - 10rem)", overflowY: "scroll" }}>
				{chats.map((chat: any) => {
					if (chat.type === "posts") {
						return (
							<PostChat
								postID={chat.postID}
								username={chat.username}
								key={chat._id}
							/>
						);
					} else {
						return null;
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
