export const getChats = (roomID: string, token: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_CHAT}/post-chats?roomID=${roomID}&token=${token}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const updateReadTime = (roomID: string, token: string) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ roomID, token }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_CHAT}/chat-read-activity?token=${token}&roomID=${roomID}`,
			options
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};

export const getUnreadChatrooms = (token: string) => {
	return new Promise<{ roomID: string }[]>((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_CHAT}/unread-activity?token=${token}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				if (resp.success) res(resp.unreads);
			})
			.catch((err) => console.log(err));
	});
};
