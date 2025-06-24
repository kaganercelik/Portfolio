import { useEffect, useRef, useState } from "react";
import axios from "axios";
import socket from "../../../utils/socket";
import { getOrCreateSessionId } from "../../../utils/session";
import { useMessages } from "../../../context/MessageContext";
import LoadingSpinner from "../../TextLoader/TextLoader";
import "./Chat.css";

const messageClassNameMapping = {
  loading: "assistant",
  assistant: "assistant",
  user: "user",
};

export default function Chat({ theme }) {
  const [input, setInput] = useState("");
  const [sessionId] = useState(getOrCreateSessionId);
  const messagesEndRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const { messages, setMessages } = useMessages();

  useEffect(() => {
    socket.on(`message-received-${sessionId}`, () => {
      setIsLoading(true);
      setMessages((prev) => [
        ...prev,
        { role: "loading", text: "" }, // Placeholder for spinner
      ]);
    });

    socket.on(`chat-response-${sessionId}`, (data) => {
      setMessages((prev) => [
        ...prev.filter((m) => m.role !== "loading"), // Remove placeholder
        {
          role: data.error ? "error" : "assistant",
          text: data.message || "No response",
        },
      ]);
      setIsLoading(false);
    });

    return () => {
      socket.off(`message-received-${sessionId}`);
      socket.off(`chat-response-${sessionId}`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(messages);
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    // setMessages((prev) => [...prev, { role: "user", text: input }]);
    try {
      await axios.post(
        `${
          process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"
        }/api/chat/send-message`,
        {
          sessionId,
          message: input,
          chatHistory: newMessages,
        }
      );
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "error",
          text: error.response?.data?.error || "Error sending message",
        },
      ]);
    }
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getContainerStyle = () => ({
    backgroundColor: theme.body,
    color: theme.text,
  });

  const getMessagesContainerStyle = () => ({
    borderBottom: `1px solid ${theme.text}`,
  });

  const getMessageBubbleStyle = (role) => ({
    backgroundColor:
      role === "user" ? theme.accentBright : theme.accentColor || "#e5e5ea",
    color: role === "user" ? "white" : theme.text,
  });

  const getInputStyle = () => ({
    border: `1px solid ${theme.text}`,
    backgroundColor: isLoading ? "#7A8A99" : theme.body,
    color: theme.text,
  });

  const getSendButtonStyle = () => ({
    backgroundColor: theme.accentBright,
  });

  return (
    <div className="chat-container" style={getContainerStyle()}>
      <div className="messages-container" style={getMessagesContainerStyle()}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message-wrapper ${messageClassNameMapping[msg.role]}`}
          >
            <div
              className={`message-bubble ${messageClassNameMapping[msg.role]}`}
              style={getMessageBubbleStyle(msg.role)}
            >
              {msg.role === "loading" ? <LoadingSpinner /> : msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <textarea
        className="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        style={getInputStyle()}
        disabled={isLoading}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        style={getSendButtonStyle()}
      >
        Send
      </button>
    </div>
  );
}
