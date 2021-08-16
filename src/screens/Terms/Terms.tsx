import React from "react";
import terms from "../../assets/terms";

export interface TermsProps {}

export const Terms: React.FC<TermsProps> = (props) => {
	return (
		<div style={{ textAlign: "left" }}>
			<div dangerouslySetInnerHTML={{ __html: terms }} />
		</div>
	);
};
