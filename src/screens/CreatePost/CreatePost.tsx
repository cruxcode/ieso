import React, { useEffect, useState } from "react";
import { CreatePostEvent, dispatchCreatePostEvent } from "../../api/posts";
import { Button } from "../../components/Button";
import { RadioGroup } from "../../components/RadioGroup";
import { RangeInput } from "../../components/RangeInput";
import { TextArea } from "../../components/TextArea";
import { TextBox } from "../../components/TextBox";
import { EventManager } from "../../lib/EventManager/EventManager";

export interface CreatePostProps {}

export const CreatePost: React.FC<CreatePostProps> = (props) => {
	/**
	 * auto generated code
	 * below code is generated when an input range is added
	 */
	const feelingInitialValue = "";
	const [feeling, setFeeling] = useState<string>(feelingInitialValue);
	const angryInitialValue = 0;
	const [angry, setAngry] = useState<number>(angryInitialValue);
	const sadInitialValue = 0;
	const [sad, setSad] = useState<number>(sadInitialValue);
	const stressedInitialValue = 0;
	const [stressed, setStressed] = useState<number>(stressedInitialValue);
	const happyInitialValue = 0;
	const [happy, setHappy] = useState<number>(happyInitialValue);
	const lonelyInitialValue = 0;
	const [lonely, setLonely] = useState<number>(lonelyInitialValue);
	const calmInitialValue = 0;
	const [calm, setCalm] = useState<number>(calmInitialValue);
	const excitedInitialValue = 0;
	const [excited, setExcited] = useState<number>(excitedInitialValue);
	const anxiousInitialValue = 0;
	const [anxious, setAnxious] = useState<number>(anxiousInitialValue);
	const annoyedInitalValue = 0;
	const [annoyed, setAnnoyed] = useState<number>(annoyedInitalValue);
	const hopefulInitialValue = 0;
	const [hopeful, setHopeful] = useState<number>(hopefulInitialValue);
	const despairedInitialValue = 0;
	const [despaired, setDespaired] = useState<number>(despairedInitialValue);
	const guiltyInitialValue = 0;
	const [guilty, setGuilty] = useState<number>(guiltyInitialValue);
	const afraidInitialValue = 0;
	const [afraid, setAfraid] = useState<number>(afraidInitialValue);
	const disgustedInitialValue = 0;
	const [disgusted, setDisgusted] = useState<number>(disgustedInitialValue);
	const surprisedInitialValue = 0;
	const [surprised, setSurprised] = useState<number>(surprisedInitialValue);
	const [isSpecific, setIsSpecific] = useState<string>("");
	const [when, setWhen] = useState<string>("");
	const [visibility, setVisibility] = useState<string>("");
	const [cause, setCause] = useState<string>("");
	const [detailedCause, setDetailedCause] = useState<string>("");
	const [disableButton, setDisableButton] = useState<boolean>(false);
	const [msg, setMsg] = useState<string>("");
	const [happened, setHappened] = useState<string>("");
	/**
	 * auto generated code
	 * below code is generated when this template was created
	 * below code is updated for each new field
	 */
	const [createPostEvent, setCreatePostEvent] = useState<CreatePostEvent>();
	useEffect(() => {
		setCreatePostEvent({
			feeling,
			angry,
			sad,
			stressed,
			happy,
			lonely,
			calm,
			excited,
			anxious,
			annoyed,
			hopeful,
			despaired,
			guilty,
			afraid,
			disgusted,
			surprised,
			isSpecific,
			visibility,
			when,
			cause,
			detailed_cause: detailedCause,
			happened,
		});
	}, [
		feeling,
		angry,
		sad,
		stressed,
		happy,
		lonely,
		calm,
		excited,
		anxious,
		annoyed,
		hopeful,
		despaired,
		guilty,
		afraid,
		disgusted,
		surprised,
		isSpecific,
		when,
		cause,
		detailedCause,
		visibility,
		happened,
	]);

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
			<TextArea
				id="feeling"
				label="How are you feeling? *"
				value={feeling}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setFeeling(event.target.value);
					},
				}}
			/>
			<h1>Emotional Rankings</h1>
			<p>
				How much are you feeling each of the following emotions right
				now, from 1 (low) to 10 (high)?
			</p>
			{/**
			 * generate code below for each field
			 */}
			<RangeInput
				id="angry"
				label="angry *"
				value={angry}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setAngry(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="sad"
				label="sad *"
				value={sad}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setSad(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="stressed"
				label="stressed *"
				value={stressed}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setStressed(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="happy"
				label="happy *"
				value={happy}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setHappy(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="lonely"
				label="lonely *"
				value={lonely}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setLonely(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="calm"
				label="calm *"
				value={calm}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setCalm(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="excited"
				label="excited *"
				value={excited}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setExcited(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="anxious"
				label="anxious *"
				value={anxious}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setAnxious(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="annyoed"
				label="annoyed *"
				value={annoyed}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setAnnoyed(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="hopeful"
				label="hopeful *"
				value={hopeful}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setHopeful(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="despaired"
				label="despaired *"
				value={despaired}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setDespaired(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="guilty"
				label="guilty *"
				value={guilty}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setGuilty(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="afraid"
				label="afraid *"
				value={afraid}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setAfraid(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="disgusted"
				label="disgusted *"
				value={disgusted}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setDisgusted(parseFloat(event.target.value));
					},
				}}
			/>
			<RangeInput
				id="surprised"
				label="surprised *"
				value={surprised}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setSurprised(parseFloat(event.target.value));
					},
				}}
			/>
			<TextBox
				id="text_6"
				value="Are you feeling this way because of specific event? *"
				style={{
					fontFamily: "Spectral",
					paddingTop: "1rem",
				}}
			/>
			<RadioGroup
				id={"radio_1"}
				label={"Yes"}
				options={[
					{
						id: "radio_option_1",
						label: "Yes",
						value: "yes",
					},
					{
						id: "radio_option_2",
						label: "No",
						value: "no",
					},
				]}
				style={{ paddingBottom: "1rem" }}
				labelStyle={{
					fontFamily: "Spectral",
				}}
				itemStyle={{
					display: "block",
				}}
				onChange={(val: string) => {
					setIsSpecific(val);
				}}
			/>
			<TextArea
				id="textbox_2"
				label="How would you describe what happened? *"
				value={happened}
				handlers={{
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						setHappened(event.target.value);
					},
				}}
			/>
			<TextBox
				id="text_7"
				value="When did this happen? *"
				style={{
					fontFamily: "Spectral",
					paddingTop: "1rem",
				}}
			/>
			<RadioGroup
				id="radio_2"
				label=""
				options={[
					{
						label: "within the last hour",
						id: "radio_2_option_1",
						value: "within the last hour",
					},
					{
						label: "within the last day",
						value: "within the last day",
						id: "radio_2_option_2",
					},
					{
						label: "within the last week",
						value: "within the last week",
						id: "radio_2_option_3",
					},
					{
						label: "within the last week",
						value: "within the last week",
						id: "radio_2_option_4",
					},
					{
						label: "other",
						id: "radio_2_option_5",
						value: "other",
					},
				]}
				labelStyle={{
					fontFamily: "Spectral",
				}}
				onChange={(val: string) => {
					setWhen(val);
				}}
			/>
			<TextBox
				id="text_8"
				value="Would you like this post to be public? *"
				style={{
					fontFamily: "Spectral",
					paddingTop: "1rem",
				}}
			/>
			<RadioGroup
				id="radio_3"
				label=""
				options={[
					{
						label: "public",
						id: "radio_3_option_1",
						value: "public",
					},
					{
						label: "private",
						id: "radio_3_option_2",
						value: "private",
					},
				]}
				onChange={(val: string) => {
					setVisibility(val);
				}}
			/>
			<TextBox
				id="text_5"
				value="If your post is public, you may receive replies from other users."
				style={{
					fontFamily: "Spectral",
					paddingTop: "0.5rem",
				}}
			/>
			<TextBox
				id="text_9"
				value="Is this related to COVID 19 or issues relevant to Black Lives Matter? *"
				style={{
					fontFamily: "Spectral",
					paddingTop: "1rem",
				}}
			/>
			<RadioGroup
				id="radio_4"
				label=""
				options={[
					{
						label: "COVID 19",
						value: "COVID 19",
						id: "radio_4_option_1",

						handlers: {
							onChange:
								"(event)=>{document.querySelector('#textbox_3').style.display='none';}",
						},
					},
					{
						label: "Black Lives Matter",
						value: "Black Lives Matter",
						id: "radio_4_option_2",

						handlers: {
							onChange:
								"(event)=>{document.querySelector('#textbox_3').style.display='none';}",
						},
					},
					{
						label: "Other",
						value: "Other",
						id: "radio_4_option_3",
						handlers: {
							onChange:
								"(event)=>{document.querySelector('#textbox_3').style.display='initial';}",
						},
					},
				]}
				style={{
					fontFamily: "Spectral",
				}}
				onChange={(val: string) => {
					setCause(val);
				}}
			/>
			{cause === "Other" ? (
				<TextArea
					id=""
					value={detailedCause}
					label=""
					handlers={{
						onChange: (
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setDetailedCause(event.target.value);
						},
					}}
				/>
			) : null}
			<Button
				onClick={() => {
					if (disableButton) {
						return;
					}
					console.log(createPostEvent);
					if (createPostEvent) {
						setDisableButton(true);
						dispatchCreatePostEvent(createPostEvent)
							?.then((resp: any) => {
								console.log(resp);
								setDisableButton(false);
								if (resp.success) {
									setMsg(
										"Your post has been submitted for approval."
									);
								} else {
									setMsg("Your post cannot be submitted.");
								}
							})
							.catch((err) => {
								console.log(err);
								setDisableButton(false);
								setMsg("Please try again later.");
							});
					}
				}}
				style={{ marginTop: "1rem", marginBottom: "1rem" }}
			>
				Send Post
			</Button>
			{<span style={{ marginLeft: "1rem" }}>{msg}</span>}
			{/**
			 * auto generate code
			 * this code is generated to take care of response
			 */}
			{/* <CreatePostSuccessComponent /> */}
			{/* <CreatePostFailureComponent /> */}
		</div>
	);
};
