import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api/user";
import { Button } from "../../components/Button";
import { RadioGroup } from "../../components/RadioGroup";

export interface RegisterProps {}

export const Register: React.FC<RegisterProps> = (props) => {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const [hispanic, setHispanic] = useState<boolean>(false);
	const [white, setWhite] = useState<boolean>(false);
	const [black, setBlack] = useState<boolean>(false);
	const [hawai, setHawai] = useState<boolean>(false);
	const [asian, setAsian] = useState<boolean>(false);
	const [american, setAmerican] = useState<boolean>(false);
	const [notIntersted, setNotIntersted] = useState<boolean>(false);
	const registerHandler = useCallback(
		(event: any) => {
			if (username.current && password.current) {
				const name = username.current.value;
				const pass = password.current.value;
				if (name && pass) {
					if (
						!(
							hispanic ||
							white ||
							black ||
							hawai ||
							asian ||
							american ||
							notIntersted
						)
					) {
						return;
					}
					const ethnicity = {
						hispanic,
						white,
						black,
						hawai,
						asian,
						nativeAmerican: american,
						notIntersted,
					};
					register(name, pass, ethnicity).then((resp: any) => {
						localStorage.setItem(
							"payload",
							JSON.stringify(resp.payload)
						);
						localStorage.setItem("token", resp.token);
						window.location.href = "http://localhost:3000";
					});
				}
			}
		},
		[
			username,
			password,
			hispanic,
			white,
			black,
			hawai,
			asian,
			american,
			notIntersted,
		]
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
				<p />
				Please select which ethnic/racial groups with which you
				identify*
				<p />
				<div>
					<input
						type="checkbox"
						id="hispanic"
						name="hispanic"
						value="Hispanic or Latino"
						onChange={(event) => {
							setHispanic(event.target.checked);
						}}
					/>
					<label htmlFor="hispanic">Hispanic or Latino</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="white"
						name="white"
						value="White"
						onChange={(event) => {
							setWhite(event.target.checked);
						}}
					/>
					<label htmlFor="white">White</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="black"
						name="black"
						value="Black or African American"
						onChange={(event) => {
							setBlack(event.target.checked);
						}}
					/>
					<label htmlFor="black">Black or African American</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="hawai"
						name="hawai"
						value="Native Hawaiian or Pacific Islander"
						onChange={(event) => {
							setHawai(event.target.checked);
						}}
					/>
					<label htmlFor="hawai">
						Native Hawaiian or Pacific Islander
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="asian"
						name="asian"
						value="Asian"
						onChange={(event) => {
							setAsian(event.target.checked);
						}}
					/>
					<label htmlFor="asian">Hispanic or Latino</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="american"
						name="american"
						value="Native American or Alaska Native"
						onChange={(event) => {
							setAmerican(event.target.checked);
						}}
					/>
					<label htmlFor="american">
						Native American or Alaska Native
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="no"
						name="no"
						value="Do not wish to disclose"
						onChange={(event) => {
							setNotIntersted(event.target.checked);
						}}
					/>
					<label htmlFor="no">Do not wish to disclose</label>
				</div>
				<br />
				<br />
				<Button style={{}} onClick={registerHandler}>
					Register
				</Button>
			</div>
		</div>
	);
};
