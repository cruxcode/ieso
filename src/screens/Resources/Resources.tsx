import React from "react";

export interface ResourcesProps {}

export const Resources: React.FC<ResourcesProps> = (props) => {
	return (
		<div style={{ textAlign: "left" }}>
			<h1>Mental Health Resources</h1>
			<p>
				ieso does not have any ties to the following external resources.
				Such resources may have different policies on reporting to
				outside agencies.
			</p>
			<h3>Columbia Resources</h3>
			<p>Please note Columbia resources are for students only.</p>
			<li>
				Columbia Counseling and Psychological Services:{" "}
				<a href="https://health.columbia.edu/content/counseling-and-psychological-services">
					https://health.columbia.edu/content/counseling-and-psychological-services
				</a>
			</li>
			<ul>
				<li>
					Support is available by calling{" "}
					<a href="tel:212-854-2878">212-854-2878</a>
				</li>
			</ul>
			<h3>General Resources</h3>
			<li>
				National 24/7 Suicide Prevention Line:{" "}
				<a href="tel:800-273-8255">800-273-8255</a>
			</li>
			<li>
				Crisis CHAT line -{" "}
				<a href="https://suicidepreventionlifeline.org/chat/">
					https://suicidepreventionlifeline.org/chat/
				</a>
			</li>
			<ul>
				<li>
					An anonymous chatline which provides online emotional
					support, crisis intervention, and suicide prevention
					services
				</li>
				<li>
					Also available via text by texting HOME to 741741 to connect
					with a Crisis Counselor
				</li>
			</ul>
			<li>
				<a href="http://www.griefnet.org/">http://www.griefnet.org/</a>{" "}
				- online support groups for adults & kids, memorials, and
				resources (ex: “book/comfort item of the week”)
			</li>
			<li>
				<a href="https://www.compassionatefriends.org/">
					https://www.compassionatefriends.org/
				</a>{" "}
				- find a local support group of others who are experiencing
				grief—not therapist/professionally ran.
			</li>
		</div>
	);
};
