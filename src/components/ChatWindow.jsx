import { useState, useRef, useEffect } from "react";
import {
  HiOutlineMenu,
  HiOutlinePaperClip,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import logoImage from "../assets/claude-logo.svg";

const ChatWindow = ({ currentChat, toggleMobileSidebar, setChats, chats }) => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Update textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Simulate API call and response
  const simulateResponse = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: "I'm Claude, an AI assistant created by Anthropic. I'm designed to be helpful, harmless, and honest. How can I assist you today?",
        });
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    if (inputValue.trim() === "") return;

    // Add user message to chat
    const updatedChat = {
      ...currentChat,
      messages: [
        ...currentChat.messages,
        { role: "user", content: inputValue.trim() },
      ],
    };

    // Update chat with user message
    const updatedChats = chats.map((chat) =>
      chat.id === currentChat.id ? updatedChat : chat
    );
    setChats(updatedChats);

    // Clear input
    setInputValue("");

    // Wait a bit to show loading state
    setIsLoading(true);

    try {
      // Simulate API call
      const response = await simulateResponse();

      // Add assistant response
      const finalChat = {
        ...updatedChat,
        title:
          updatedChat.messages.length === 0
            ? inputValue.trim().substring(0, 30)
            : updatedChat.title,
        messages: [
          ...updatedChat.messages,
          { role: "assistant", content: response.text },
        ],
      };

      // Update chats with assistant response
      const finalChats = chats.map((chat) =>
        chat.id === currentChat.id ? finalChat : chat
      );
      setChats(finalChats);
    } catch (error) {
      console.error("Error getting response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden">
      {/* Header for mobile */}
      <div className="flex items-center p-4 border-b border-gray-200 lg:hidden">
        <button
          onClick={toggleMobileSidebar}
          className="p-1 mr-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-medium">Claude.ai</h1>
      </div>

      {/* Main chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
        {currentChat.messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <img
              src={logoImage}
              alt="Claude Logo"
              className="w-20 h-20 mb-6"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/80x80?text=Claude";
              }}
            />
            <h2 className="text-2xl font-semibold mb-2">
              How can I help you today?
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
              I'm Claude, an AI assistant created by Anthropic. I'm designed to
              be helpful, harmless, and honest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full">
              <SuggestionButton
                text="Write a short story about a robot learning to paint"
                onClick={() =>
                  setInputValue(
                    "Write a short story about a robot learning to paint"
                  )
                }
              />
              <SuggestionButton
                text="Help me draft an email to reschedule a meeting"
                onClick={() =>
                  setInputValue(
                    "Help me draft an email to reschedule a meeting"
                  )
                }
              />
              <SuggestionButton
                text="Explain the basics of quantum computing"
                onClick={() =>
                  setInputValue("Explain the basics of quantum computing")
                }
              />
              <SuggestionButton
                text="What are some healthy breakfast ideas?"
                onClick={() =>
                  setInputValue("What are some healthy breakfast ideas?")
                }
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {currentChat.messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[85%] ${
                    message.role === "user"
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <span className="typing-animation"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 md:px-8 md:pb-6">
        <div className="relative max-w-3xl mx-auto">
          <div className="chat-input-container flex items-end bg-white rounded-lg border border-gray-300 focus-within:border-primary-600 transition-shadow p-2">
            <textarea
              ref={textareaRef}
              placeholder="Message Claude..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 resize-none outline-none min-h-[22px] max-h-[200px] py-1 px-2"
              rows="1"
            />
            <div className="flex items-center space-x-2 pl-2">
              <button
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
                title="Attach file"
              >
                <HiOutlinePaperClip className="h-5 w-5" />
              </button>
              <button
                onClick={handleSubmit}
                disabled={inputValue.trim() === "" || isLoading}
                className={`p-1 rounded-md ${
                  inputValue.trim() === "" || isLoading
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-primary-600 hover:text-primary-800"
                }`}
                title="Send message"
              >
                <HiOutlinePaperAirplane className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            Claude can make mistakes. Consider checking important information.
          </div>
        </div>
      </div>
    </div>
  );
};

// Suggestion button component
const SuggestionButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
  >
    <p className="text-sm font-medium text-gray-800 truncate">{text}</p>
  </button>
);

export default ChatWindow;
