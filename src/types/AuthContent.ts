export interface AuthContent {
	userID: string | undefined;
	username: string | undefined;
	token: string | undefined;
	signin: (payload: string, token: string) => Promise<boolean>;
	signout: () => Promise<boolean>;
}
