import { useState } from "react";
import "./AIFloatingButton.css";

const starterQuestions = [
  "What physiotherapy services do you offer?",
  "How can I book an appointment?",
  "How can physiotherapy help with back pain?",
];

function BotIcon({ size = 25 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="7" width="16" height="13" rx="4" />
      <path d="M12 3v4M9 13h.01M15 13h.01M9 17h6" />
      <path d="M2 12v3M22 12v3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am your PhysioCare assistant. How can I help you today?",
    },
  ]);

  function sendMessage(text = input) {
    const question = text.trim();

    if (!question) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
      {
        role: "assistant",
        text: "Thanks for your question! Please contact our physiotherapy team for personalised guidance. Our AI service will be connected here soon.",
      },
    ]);

    setInput("");
  }

  return (
    <div className="ai-floating-widget">
      {isOpen && (
        <section
          className="ai-chat-panel"
          role="dialog"
          aria-label="PhysioCare AI assistant"
          aria-modal="false"
        >
          <div className="ai-chat-header">
            <div className="ai-header-profile">
              <span className="ai-avatar">
                <BotIcon size={23} />
                <span className="ai-online-dot" />
              </span>

              <div>
                <h2>PhysioCare AI</h2>
                <p>Your wellness assistant</p>
              </div>
            </div>

            <button
              type="button"
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="ai-chat-content" aria-live="polite">
            <span className="ai-chat-date">WELCOME TO PHYSIOCARE</span>

            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`ai-message-row ${
                  message.role === "user" ? "ai-user-row" : ""
                }`}
              >
                {message.role === "assistant" && (
                  <span className="ai-message-avatar">
                    <BotIcon size={17} />
                  </span>
                )}

                <div
                  className={`ai-message ${
                    message.role === "user"
                      ? "ai-user-message"
                      : "ai-assistant-message"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="ai-starter-questions">
                <p>YOU CAN ASK ME</p>

                {starterQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                  >
                    {question}
                    <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="ai-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask your question..."
              aria-label="Type your question"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>

          <p className="ai-chat-disclaimer">
            For general information only, not a medical diagnosis.
          </p>
        </section>
      )}

      <button
        type="button"
        className={`ai-floating-trigger ${isOpen ? "ai-trigger-active" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        <span className="ai-trigger-icon">
          {isOpen ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <BotIcon size={27} />
          )}
        </span>

        <span className="ai-trigger-label">
          {isOpen ? "Close assistant" : "Ask AI"}
        </span>
      </button>
    </div>
  );
}