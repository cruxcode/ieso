import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getApprovedPost, getPost } from "../../api/posts";
import { Comments } from "../../components/Comments";
import { ShowPost } from "../../components/ShowPost";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};
export const PostComment: React.FC = (props) => {
	const postID = useQuery().get("postID");
	const [post, setPost] = useState<any>();
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token && postID) {
			getPost(postID, token)
				.then((post: any) => {
					if (post.success) setPost(post.post);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (postID)
			getApprovedPost(postID)
				.then((post: any) => {
					if (post.success) setPost(post.post);
				})
				.catch((err) => {
					console.log(err);
				});
	}, [setPost, postID]);
	return (
		<div>
			{post ? <ShowPost post={post} /> : null}
			{postID ? <Comments postID={postID} /> : null}
		</div>
	);
};
