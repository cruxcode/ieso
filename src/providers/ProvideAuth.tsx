import { createContext, useContext, useEffect, useState } from "react";
import { AuthContent } from "../types/AuthContent";

const authContext = createContext<AuthContent>({
	userID: undefined,
	username: undefined,
	token: undefined,
	signin: async (payload: string, token: string) => {
		return false;
	},
	signout: async () => {
		return false;
	},
});

export const useAuth = () => {
	return useContext(authContext);
};

const useProvideAuth = () => {
	const [userID, setUserID] = useState<string | undefined>(undefined);
	const [username, setUsername] = useState<string | undefined>(undefined);
	const [token, setToken] = useState<string | undefined>(undefined);
	useEffect(() => {
		const token = localStorage.getItem("token");
		const payload = localStorage.getItem("payload");
		if (!token || !payload) {
			return;
		}
		try {
			const parsed = JSON.parse(payload);
			if (parsed.name && parsed.userID) {
				setToken(token);
				setUserID(parsed.userID);
				setUsername(parsed.name);
			}
		} catch (err) {
			console.log(err);
		}
	}, [setUserID, setUsername]);
	const signin = (payload: string, token: string): Promise<boolean> => {
		return new Promise((res, rej) => {
			localStorage.setItem("token", token);
			localStorage.setItem("payload", payload);
			try {
				const parsed = JSON.parse(payload);
				if (parsed.name && parsed.userID) {
					setToken(token);
					setUserID(parsed.userID);
					setUsername(parsed.name);
				}
			} catch (err) {
				console.log(err);
			}
			res(true);
		});
	};
	const signout = (): Promise<boolean> => {
		return new Promise((res, rej) => {
			localStorage.clear();
			setUsername(undefined);
			setUserID(undefined);
			res(true);
		});
	};
	return {
		userID,
		username,
		token,
		signin,
		signout,
	};
};

export const ProvideAuth = (props: any) => {
	const auth = useProvideAuth();
	// console.log({ ProvideAuth: auth });
	return (
		<authContext.Provider value={auth}>
			{props.children}
		</authContext.Provider>
	);
};
