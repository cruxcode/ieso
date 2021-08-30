import { useCallback, useEffect, useState } from "react";
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
	const onUserSelect = useCallback(
		(user: User) => {
			console.log(user);
			setSelectedUser(user);
		},
		[setSelectedUser]
	);
	console.log(userlist);
	return (
		<div style={{ height: "100%" }}>
			<h1>Messages</h1>
			<div style={{ display: "flex", height: "100%" }}>
				<div style={{ flexBasis: "15rem" }}>
					<UserList
						messages={messages}
						userList={userlist}
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
