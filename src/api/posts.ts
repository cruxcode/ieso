/**
 * auto generated code for both backend and frontend
 */
export interface CreatePostEvent {
	feeling: string;
	angry: number;
	sad: number;
	stressed: number;
	happy: number;
	lonely: number;
	calm: number;
	excited: number;
	anxious: number;
	annoyed: number;
	hopeful: number;
	despaired: number;
	guilty: number;
	afraid: number;
	disgusted: number;
	surprised: number;
	isSpecific: string;
	visibility: string;
	when: string;
	cause: string;
	detailed_cause: string;
}

export const dispatchCreatePostEvent = (post: CreatePostEvent) => {
	const token = localStorage.getItem("token");
	if (!token) {
		console.log("not signed in");
		return;
	}
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ post, token }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch("http://localhost:4001", options)
			.then((resp) => resp.json())
			.then((resp) => {
				res(resp);
			})
			.catch((err) => {
				console.log(err);
				rej(err);
			});
	});
};
