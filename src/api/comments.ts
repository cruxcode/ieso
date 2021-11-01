export const sendComment = (comment: string, postID: string) => {
	const token = localStorage.getItem("token");
	if (!token) {
		console.log("not signed in");
		return;
	}
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "POST",
		body: JSON.stringify({ comment, postID, token }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/comment`, options)
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

export const castCommentApproval = (
	commentID: string,
	status: "approve" | "reject"
) => {
	const token = localStorage.getItem("token");
	if (!token) {
		console.log("not signed in");
		return;
	}
	var headers = new Headers();
	headers.append("Content-Type", "application/json");
	const options = {
		method: "PUT",
		body: JSON.stringify({ commentID, token, status }),
		headers: headers,
	};
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/comment-approval`,
			options
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

export const getApprovedComments = (postID: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/approved-comments?postID=${postID}`
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

export const getComment = (commentID: string) => {
	return new Promise((res, rej) => {
		fetch(
			`${process.env.REACT_APP_BACKEND_ORIGIN_POST}/comment?commentID=${commentID}`
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
