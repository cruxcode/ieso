import { useAuth } from "../providers/ProvideAuth";
import { User } from "../types/UserList";

export interface UserListProps {
	userList: User[];
	unreadList: User[];
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
			{/* <div>
				<input
					style={{
						width: "calc(100% - 1rem)",
					}}
				/>
			</div> */}
			{props.unreadList.length > 0 ? (
				<div>
					<b>New Messages</b>
				</div>
			) : null}
			{props.unreadList.map((user, index) => {
				return (
					<div
						style={{
							borderTop: "1px solid #C4C4C4",
							borderBottom: "1px solid #C4C4C4",
							paddingTop: "0.5em",
							paddingBottom: "0.5em",
						}}
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
			{props.userList.length > 0 ? (
				<div style={{ marginTop: "2em" }}>
					<b>Users</b>
				</div>
			) : null}
			{props.userList.map((user, index) => {
				return (
					<div
						style={{
							borderTop: "1px solid #C4C4C4",
							borderBottom: "1px solid #C4C4C4",
							paddingTop: "0.5em",
							paddingBottom: "0.5em",
						}}
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
