import { useAuth } from "../providers/ProvideAuth";
import { User } from "../types/UserList";

export interface UserListProps {
	userList: User[];
	messages: string[];
	onSelect?: (user: User) => void;
}

export const UserList: React.FC<UserListProps> = (props) => {
	const { userID } = useAuth();
	if (
		props.userList &&
		props.userList.length > 0 &&
		props.userList[0]._id === userID
	) {
		return null;
	}
	return (
		<div style={{ minWidth: "15rem" }}>
			<div>
				<input
					style={{
						width: "calc(100% - 1rem)",
					}}
				/>
			</div>
			{props.userList.map((user, index) => {
				return (
					<div
						style={{ borderBottom: "1px solid #C4C4C4" }}
						onClick={() => {
							if (props.onSelect) props.onSelect(user);
						}}
						key={user._id}
					>
						<p>{user.username}</p>
						<p>{props.messages[index]}</p>
					</div>
				);
			})}
		</div>
	);
};
