import { useEffect, useState } from "react";
import { getApprovedList } from "../../api/posts";
import { CreatePostButton } from "../../components/CreatePostButton";
import { Post } from "../../components/Post";
import { CreatePost } from "../CreatePost/CreatePost";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const [posts, setPosts] = useState<any[]>();
	useEffect(() => {
		getApprovedList().then((resp: any) => {
			if (resp && resp.success) {
				setPosts(resp.posts);
			}
		});
	}, [setPosts]);
	return (
		<div>
			<h1>Posts</h1>
			{posts?.map((postWrapper) => {
				const username = postWrapper.username;
				const post = postWrapper.post;
				const postID = postWrapper._id;
				return (
					<div key={postID}>
						<Post postID={postID} post={post} username={username} />
						<br />
					</div>
				);
			})}
			<CreatePostButton />
		</div>
	);
};
