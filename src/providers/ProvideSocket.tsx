import { createContext, useContext } from "react";
import { io } from "socket.io-client";

interface SocketContent {
	socket: any;
	connect: (cb: () => void) => void;
	disconnect: any;
	joinrooms: any;
}

const socketContext = createContext<SocketContent>({
	socket: null,
	connect: (cb = () => {}) => {},
	disconnect: null,
	joinrooms: null,
});

export function useSocket() {
	return useContext(socketContext);
}

export function ProvideSocket(props: any) {
	const socket = useProvideSocket();
	return (
		<socketContext.Provider value={socket}>
			{props.children}
		</socketContext.Provider>
	);
}

function useProvideSocket() {
	const socket = io("http://localhost:4002", {
		autoConnect: false,
	});
	let _rooms: any;
	/**
	 *
	 * functions
	 */
	function connect(cb: () => void) {
		if (!socket.connected) {
			socket.connect();
			socket.on("connect", () => {
				console.log("socket connection status", socket.connected);
				if (cb) cb();
			});
		} else {
			cb();
		}
	}
	function disconnect() {
		socket.disconnect();
	}
	// TODO: generalize this for all kinds of chat connection
	function joinrooms(token: string) {
		if (socket.connected) {
			socket.emit("joinrooms", { token });
		} else {
			console.log("Cannot join rooms, socket isn't connected");
		}
	}
	/**
	 * listeners
	 */
	socket.on("disconnect", () => {
		console.log("disconnected socket");
	});
	return { socket, connect, disconnect, joinrooms };
}
