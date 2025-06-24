import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"],
});

export default socket;
