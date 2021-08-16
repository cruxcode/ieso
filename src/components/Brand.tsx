import React from "react";

export interface BrandProps {}

export const Brand: React.FC<BrandProps> = (props) => {
	return (
		<div
			style={{
				fontWeight: "bold",
				fontSize: "3rem",
				fontFamily: "Abril Fatface",
			}}
		>
			ieso
		</div>
	);
};
