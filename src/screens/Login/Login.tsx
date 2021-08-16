import React, { useCallback, useRef } from "react";
import { login } from "../../api/user";
import { Button } from "../../components/Button";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const loginHandler = useCallback(
		(event: any) => {
			if (username.current && password.current) {
				const name = username.current.value;
				const pass = password.current.value;
				login(name, pass).then((resp: any) => {
					localStorage.setItem(
						"payload",
						JSON.stringify(resp.payload)
					);
					localStorage.setItem("token", resp.token);
					window.location.href = "http://localhost:3000";
				});
			}
		},
		[username, password]
	);
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
					ref={username}
				></input>
				<br />
				<label htmlFor="password">Password</label>
				<input
					style={{ display: "block", width: "100%" }}
					type="password"
					id="password"
					ref={password}
				></input>
				<br />
				<Button style={{}} onClick={loginHandler}>
					Sign In
				</Button>
			</div>
		</div>
	);
};
