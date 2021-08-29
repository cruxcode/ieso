import React from "react";
import { Link } from "react-router-dom";
import { CreatePostButton } from "../../components/CreatePostButton";

export interface SiteRulesProps {}

export const SiteRules: React.FC<SiteRulesProps> = (props) => {
	return (
		<div style={{ textAlign: "left" }}>
			<h1>Site Rules</h1>
			<li>
				If you need immediate help, please contact a suicide prevention
				hotline.
			</li>
			<li>
				Please treat one another with kindness and respect. Avoid
				casting judgments upon other posters and commenters. Avoid
				name-calling, dismissive responses, and other types of
				harassment.
			</li>
			<li>Please avoid identifying information.</li>
			<li>
				Social workers working on the site have final say on whether
				posts and comments are published.
			</li>
			<li>
				Report offensive posts or posts which break the site’s{" "}
				<Link to="/terms">Terms of Service</Link>.
			</li>
			<li>
				Abusing the site's <Link to="/terms">Terms of Service</Link>{" "}
				will result in an account ban.
			</li>
			<CreatePostButton />
		</div>
	);
};
