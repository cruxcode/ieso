import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { ShowPost } from "../../components/ShowPost";
import { useAuth } from "../../providers/ProvideAuth";
import { About } from "../About/About";
import { CreatePost } from "../CreatePost/CreatePost";
import { Home } from "../Home/Home";
import { Messages } from "../Messages/Messages";
import { PostComment } from "../PostComment/PostComment";
import { Privacy } from "../Privacy/Privacy";
import { Resources } from "../Resources/Resources";
import { SiteRules } from "../SiteRules/SiteRules";
import { Terms } from "../Terms/Terms";

export interface BaseProps {}

export const Base: React.FC<BaseProps> = (props) => {
	const { token, signout, username } = useAuth();
	console.log(token);
	return (
		<div>
			<Router>
				<div style={{ ...BaseContainerStyle }}>
					<div style={{ ...LeftChildStyle }}>
						<Brand />
						<br />
						{username ? <>Signed in as {username}</> : null}
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								textAlign: "left",
								flexWrap: "wrap",
							}}
						>
							{token ? (
								<Button
									style={{
										marginTop: "1rem",
										marginRight: "1rem",
									}}
									onClick={async () => {
										await signout();
										window.location.href =
											"http://localhost:3000";
									}}
								>
									Logout
								</Button>
							) : (
								<>
									<Button
										style={{
											marginTop: "1rem",
											marginRight: "1rem",
										}}
									>
										<a href="/login">Sign In</a>
									</Button>
									<Button
										style={{
											marginTop: "1rem",
										}}
									>
										<a href="/register">Register</a>
									</Button>
								</>
							)}
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/">home</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/messages">messages</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/about">about</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/site-rules">site rules</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/privacy">privacy</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/terms">terms of service</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							<Link to="/resources">mental health resources</Link>
						</div>
						<br />
						<div style={{ textAlign: "left" }}>
							A platform for sharing grief and emotions, and for
							finding help. Discuss with other users, and
							contribute to Columbia research on distress.
						</div>
					</div>
					<div style={{ ...RightChildStyle }}>
						<Switch>
							<Route path="/messages">
								<Messages />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/site-rules">
								<SiteRules />
							</Route>
							<Route path="/privacy">
								<Privacy />
							</Route>
							<Route path="/terms">
								<Terms />
							</Route>
							<Route path="/resources">
								<Resources />
							</Route>
							<Route path="/createpost">
								<CreatePost />
							</Route>
							<Route path="/post">
								<PostComment />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

const BaseContainerStyle: React.CSSProperties = {
	display: "flex",
	flexDirection: "row",
	height: "100vh",
	width: "100vw",
	flexWrap: "wrap",
};

const LeftChildStyle: React.CSSProperties = {
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	paddingLeft: "2em",
	paddingRight: "2em",
	justifyContent: "center",
	maxWidth: "15rem",
	fontFamily: "Work Sans",
};

const RightChildStyle: React.CSSProperties = {
	height: "100vh",
	flexGrow: 1,
	flexBasis: "calc(100% - 20rem)",
	fontFamily: "Spectral",
};
