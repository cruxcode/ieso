import { FC, ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../providers/ProvideAuth";

export interface PrivateRouteProps {
	children: {
		content: ReactNode;
	};
	path: string;
}
export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
	let auth = useAuth();
	console.log("PrivateRoute called");
	return (
		<Route
			path={props.path}
			render={({ location }) =>
				auth.token ? (
					props.children.content
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};
