import React from "react";

export interface AboutProps {}

export const About: React.FC<AboutProps> = (props) => {
	return (
		<div style={{ textAlign: "left" }}>
			<h1>About</h1>
			<div>
				<p>
					ieso is a platform where users can share their emotions,
					experiences, and interact with other users.
				</p>
				<p>
					Posts not only help users in coming to terms with their
					difficult life experiences, but also help social workers
					identify how to best help individuals during this difficult
					and isolating time. In addition, participating in the
					platform assists NLP research in identifying states of
					distress.
				</p>
				<p>
					Posting on ieso is done pseudonymously in order to protect
					your identity. In order to maintain the platform as a place
					for healing and compassion, we rely on the generosity of
					volunteer student social workers in order to vet posts. As
					such, all posts and replies made on the site will require
					moderator approval before being made publicly viewable. Once
					approved, public posts and replies will be made visible to
					other users on the site. Thank you for your understanding
					and help in building up this community.
				</p>
				<p>
					For more information regarding ieso, please refer to the
					information sheet.
				</p>
			</div>
		</div>
	);
};
