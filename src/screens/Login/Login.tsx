import React from "react";
import { Button } from "../../components/Button";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				maxWidth: "30rem",
				margin: "0 auto",
				minHeight: "100vh",
				justifyContent: "center",
			}}
		>
			<div style={{ textAlign: "left", width: "100%" }}>
				<label htmlFor="username">Username</label>
				<input
					style={{ display: "block", width: "100%" }}
					id="username"
				></input>
				<br />
				<label htmlFor="password">Password</label>
				<input
					style={{ display: "block", width: "100%" }}
					type="password"
					id="password"
				></input>
				<br />
				<Button style={{}}>Sign In</Button>
			</div>
		</div>
	);
};
