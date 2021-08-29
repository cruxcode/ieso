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
		fetch("http://localhost:4000/user-exists", options)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const register = (username: string, password: string) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ username, password }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch("http://localhost:4000/register", options)
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
		fetch("http://localhost:4000/login", options)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const getUserList = (token: string) => {
	return new Promise((res, rej) => {
		fetch(`http://localhost:4000/user-list?token=${token}`)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};
