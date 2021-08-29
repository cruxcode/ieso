import { useEffect, useState } from "react";
import { getChats } from "../api/chat";
import { getPost } from "../api/posts";
import { useAuth } from "../providers/ProvideAuth";
import { PostChat } from "./PostChat";

export interface ChatBoxProps {
	roomID: string;
}

export const ChatBox: React.FC<ChatBoxProps> = (props) => {
	const { token } = useAuth();
	const [chats, setChats] = useState([]);
	useEffect(() => {
		if (props.roomID && token) {
			getChats(props.roomID, token).then((resp: any) => {
				if (resp.success && resp.chats) {
					setChats(resp.chats);
				}
			});
		}
	}, [props.roomID, setChats, token]);
	return (
		<div>
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
	);
};
