/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import LoginPage from "./components/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  // Check if user is logged in on initial load
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setChats([]);
    setCurrentChat(null);
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [],
    };
    setChats([newChat, ...chats]);
    setCurrentChat(newChat);
    return newChat;
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  useEffect(() => {
    if (isLoggedIn && chats.length === 0) {
      createNewChat();
    }
  }, [isLoggedIn, chats.length]);

  if (!isLoggedIn) {
    return (
      <GoogleOAuthProvider
        clientId={
          import.meta.env.VITE_GOOGLE_CLIENT_ID || "placeholder-client-id"
        }
      >
        <LoginPage onLogin={handleLogin} />
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        chats={chats}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        createNewChat={createNewChat}
        onLogout={handleLogout}
        isMobileOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />

      <ChatWindow
        currentChat={currentChat || createNewChat()}
        toggleMobileSidebar={toggleMobileSidebar}
        setChats={setChats}
        chats={chats}
      />
    </div>
  );
}

export default App;
