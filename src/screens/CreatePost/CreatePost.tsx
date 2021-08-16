import React from "react";

export interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = (props) => {
	return (
		<div style={{ textAlign: "left" }}>
			<h1>Submit a Posting</h1>
			<p>
				In your posting, you will be asked to share a self evaluation of
				your emotions. First, you will be asked to describe your
				emotions, and then you will be asked to evaluate them by ranking
				a set of chosen emotions from 1 to 10. After describing your
				emotions, you will be asked to describe any potential events or
				topics relating to your emotions. Please recall that you are
				free to make postings at any time as part of this study.
			</p>
			<div>
				<label htmlFor="feelingtext">How are you feeling?*</label>
				<textarea
					rows={4}
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
				/>
			</div>
			<h1>Emotional Rankings</h1>
			<p>
				How much are you feeling each of the following emotions right
				now, from 1 (low) to 10 (high)?
			</p>
			<div>
				<label htmlFor="angry">angry *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="sad">sad *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="stressed">stressed *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="happy">happy *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="lonely">lonely *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="calm">calm *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="exicted">excited *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="anxious">anxious *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="angry">angry*</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="annoyed">annoyed *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="hopeful">hopeful *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="despaired">despaired *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="guilty">guilty *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="afraid">afraid *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="disgusted">disgusted *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
			<div>
				<label htmlFor="surprised">surprised *</label>
				<input
					type="range"
					style={{
						display: "block",
						width: "calc(100% - 1rem)",
						boxSizing: "border-box",
						resize: "none",
					}}
					min={0}
					max={10}
				></input>
			</div>
		</div>
	);
};
