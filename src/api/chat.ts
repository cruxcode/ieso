export const getChats = (roomID: string, token: string) => {
	return new Promise((res, rej) => {
		fetch(
			`http://localhost:4002/post-chats?roomID=${roomID}&token=${token}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => console.log(err));
	});
};
