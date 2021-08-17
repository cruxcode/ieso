import React, { useEffect, useState } from "react";
import { RangeInput } from "../../components/RangeInput";
import { TextArea } from "../../components/TextArea";
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
	]);

	/**
	 * auto-generated code
	 */
	const createPostHeaders = new Headers();
	createPostHeaders.append("Content-Type", "application/json");
	EventManager.dispatch(
		"CreatePost",
		createPostEvent,
		{ token: localStorage.getItem("token") },
		createPostHeaders,
		"POST"
	).then((resp) => {
		/**
		 * auto-generated code
		 * what to do after success or failure
		 * options are:
		 * 1. refresh the page
		 * 3. show success/failure snackbar
		 * 3. show success/failure dialog box
		 */
		if (resp.success) {
			// createPostSuccessResponse();
		} else {
			// createPostFailureResponse();
		}
	});
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
			{/**
			 * auto generate code
			 * this code is generated to take care of response
			 */}
			<CreatePostSuccessComponent />
			<CreatePostFailureComponent />
		</div>
	);
};

/**
 * auto generated code for both backend and frontend
 */
interface CreatePostEvent {
	feeling: string;
	angry: number;
	sad: number;
	stressed: number;
	happy: number;
	lonely: number;
	calm: number;
	excited: number;
	anxious: number;
	annoyed: number;
	hopeful: number;
	despaired: number;
	guilty: number;
	afraid: number;
	disgusted: number;
	surprised: number;
}

/**
 * auto generated code for frontend
 */

/**
 * auto generated code
 * check if it satisfies schema for backend
 */
function satisfiesCreatePostEvent(createPostEvent: any) {}

/**
 *
 */
