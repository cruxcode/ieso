import { useCallback, useEffect, useState } from "react";
import { getUserList } from "../../api/user";
import { UserList } from "../../components/UserList";
import { useAuth } from "../../providers/ProvideAuth";
import { User } from "../../types/UserList";

export interface MessagesProps {}

export const Messages: React.FC<MessagesProps> = (props) => {
	const [userlist, setUserlist] = useState<User[]>([]);
	const [messages, setMessages] = useState<[]>([]);
	const { token } = useAuth();
	useEffect(() => {
		if (token)
			getUserList(token).then((resp: any) => {
				if (resp.success && resp.user_list) {
					setUserlist(resp.user_list);
				}
			});
	}, [setUserlist, token]);
	const onUserSelect = useCallback((user: User) => {
		console.log(user);
	}, []);
	console.log(userlist);
	return (
		<div>
			<h1>Messages</h1>
			<div style={{ display: "flex" }}>
				<div style={{ flexBasis: "15rem" }}>
					<UserList
						messages={messages}
						userList={userlist}
						onSelect={onUserSelect}
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
};
