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
	happened: string;
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
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_POST}`, options)
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

export const getPost = (postID: string, token: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_POST}?token=${token}&postID=${postID}`
		)
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

export const castApproval = (postID: string, status: string, token: string) => {
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "PUT",
		body: JSON.stringify({ postID, token, status }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/approval`, options)
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

export const getApprovedList = () => {
	return new Promise((res, rej) => {
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/approved`)
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

export const getApprovedPost = (postID: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/approved-post?postID=${postID}`
		)
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
