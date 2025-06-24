import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Welcome to the chat! I'm the personal AI assistant of Y.Kagan. How can I assist you today?",
    },
  ]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessages = () => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }

  return context;
};

export { MessageProvider, useMessages };
