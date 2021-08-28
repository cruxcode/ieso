export function dispatchAPIEvent(type: any, token: string, event: any) {
	console.log(type, token, event);
}

(window as any).dispatchAPIEvent = dispatchAPIEvent;
