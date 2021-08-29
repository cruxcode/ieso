import { Button } from "./Button";

export const CreatePostButton = () => {
	return (
		<div
			style={{
				position: "fixed",
				bottom: "20px",
				right: "20px",
			}}
		>
			<Button
				style={{
					padding: "1rem",
					borderRadius: "1.5rem",
				}}
				onClick={() => {
					window.location.href = "/createpost";
				}}
			>
				Post
			</Button>
		</div>
	);
};
