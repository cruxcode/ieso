export class EventManager {
	public static dispatch(
		eventName: string,
		event: any,
		user: any,
		headers: Headers,
		method: string
	): Promise<any> {
		const options = {
			method,
			body: JSON.stringify({ event, eventName, user }),
			headers,
		};

		return fetch("http://localhost:4001" + "/eventhandler").then((resp) =>
			resp.json()
		);
	}
}
