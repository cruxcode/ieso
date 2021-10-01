import { useCallback, useEffect, useState } from "react";
import { getUnreadChatrooms } from "../../api/chat";
import { getUserList } from "../../api/user";
import { ChatBox } from "../../components/ChatBox";
import { UserList } from "../../components/UserList";
import { useAuth } from "../../providers/ProvideAuth";
import { useSocket } from "../../providers/ProvideSocket";
import { User } from "../../types/UserList";

export interface MessagesProps {}

export const Messages: React.FC<MessagesProps> = (props) => {
	const [userlist, setUserlist] = useState<User[]>([]);
	const [messages, setMessages] = useState<[]>([]);
	const [selectedUser, setSelectedUser] = useState<User>();
	const { token } = useAuth();
	const { socket, connect, joinrooms, disconnect } = useSocket();
	const [unreadChatrooms, setUnreadChatroom] = useState<User[]>([]);
	useEffect(() => {
		if (token)
			getUserList(token).then((resp: any) => {
				if (resp.success && resp.user_list) {
					setUserlist(resp.user_list);
					if (resp.user_list.length > 0) {
						setSelectedUser(resp.user_list[0]);
					}
				}
			});
	}, [setUserlist, token, setSelectedUser]);
	useEffect(() => {
		connect(() => {
			joinrooms(token);
		});
		return () => {
			disconnect();
		};
	}, [connect, joinrooms, disconnect, token]);
	useEffect(() => {
		const joinRoomsListener = (msg: any) => {
			console.log(msg);
		};
		socket.on("joinrooms", joinRoomsListener);
		return () => {
			socket.off("joinrooms", joinRoomsListener);
		};
	}, [socket]);
	useEffect(() => {
		if (token) {
			getUnreadChatrooms(token).then((unreads) => {
				if (unreads) {
					const unreadChatrooms: User[] = [];
					for (let i = 0; i < unreads.length; i++) {
						for (let j = 0; j < userlist.length; j++) {
							if (userlist[j]._id == unreads[i].roomID) {
								unreadChatrooms.push(userlist[j]);
							}
						}
					}
					setUnreadChatroom(unreadChatrooms);
				}
			});
		}
	}, [token, userlist, setUnreadChatroom]);
	const onUserSelect = useCallback(
		(user: User) => {
			console.log(user);
			setSelectedUser(user);
		},
		[setSelectedUser]
	);
	return (
		<div style={{ height: "100%" }}>
			<h1>Messages</h1>
			<div style={{ display: "flex", height: "100%" }}>
				<div style={{ flexBasis: "0" }}>
					<UserList
						messages={messages}
						userList={userlist}
						unreadList={unreadChatrooms}
						onSelect={onUserSelect}
					/>
				</div>
				<div
					style={{
						flexGrow: 1,
						borderLeft: "1px solid black",
						height: "100%",
						padding: "0 1rem",
					}}
				>
					{selectedUser ? (
						<ChatBox roomID={selectedUser._id} />
					) : null}
				</div>
			</div>
		</div>
	);
};
