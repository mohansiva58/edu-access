import React, { useEffect, useState } from "react";
import './ChatbotComponent.css';

const ChatbotComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.id = "chatbase-script";
      script.src = "https://www.chatbase.co/embed.min.js";
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => console.log("Chatbot script loaded successfully.");
      script.onerror = (error) =>
        console.error("Error loading chatbot script:", error);
    }
  }, []);

  return (
    <>
      <button
        className="chatbot-toggle"
        onClick={() => setIsChatOpen((prev) => !prev)}
      >
        💬
      </button>

      {isChatOpen && (
        <div className="chatbot-window">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Tt5U-baaWAS1VE23abRoq"
            className="chatbot-iframe"
            title="Chatbot"
          ></iframe>
          <button
            className="close-button"
            onClick={() => setIsChatOpen(false)}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
