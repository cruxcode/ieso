import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export interface RegisterProps {}

export const Register: React.FC<RegisterProps> = (props) => {
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
			<div style={{ textAlign: "left" }}>Welcome to ieso.</div>
			<br />
			<div style={{ textAlign: "left" }}>
				When creating an account, please refrain from including any
				identifiable information in order to help preserve your
				anonymity. In the case that your username contains any
				personally identifiable information, your account and any
				associated content will be permanently deleted.
			</div>
			<br />
			<div style={{ textAlign: "left" }}>
				For more information regarding ieso, please refer to the{" "}
				<Link to="/information">information sheet</Link>.
			</div>
			<br />
			<div style={{ textAlign: "left" }}>
				By creating an account, you confirm that you are over 18 years
				of age.
			</div>
			<br />
			<br />
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
				<Button style={{}}>Register</Button>
			</div>
		</div>
	);
};
