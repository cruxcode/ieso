import { useAuth } from "../providers/ProvideAuth";

export const usernameExists = (username: string) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ username }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_USER}/user-exists`,
			options
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const register = (
	username: string,
	password: string,
	ethnicity: any
) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ username, password, ethnicity }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_USER}/register`, options)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const login = (username: string, password: string) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ username, password }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_USER}/login`, options)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const getUserList = (token: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_USER}/user-list?token=${token}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const getUserRole = (token: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_USER}/role?token=${token}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};
