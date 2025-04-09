import { useState } from "react";
import {
  HiPlus,
  HiOutlineLogout,
  HiOutlineChat,
  HiOutlineCog,
  HiOutlineX,
} from "react-icons/hi";

const Sidebar = ({
  chats,
  currentChat,
  setCurrentChat,
  createNewChat,
  onLogout,
  isMobileOpen,
  toggleMobileSidebar,
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* New Chat Button */}
          <div className="p-4">
            <button
              onClick={createNewChat}
              className="flex items-center justify-center w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
            >
              <HiPlus className="mr-2" />
              New chat
            </button>
          </div>

          {/* Close button (mobile only) */}
          <button
            className="absolute top-4 right-4 lg:hidden text-gray-500 hover:text-gray-700"
            onClick={toggleMobileSidebar}
          >
            <HiOutlineX className="h-5 w-5" />
          </button>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto px-3 py-2">
            <div className="space-y-1">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setCurrentChat(chat)}
                  className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                    currentChat && currentChat.id === chat.id
                      ? "bg-primary-100 text-primary-800"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <HiOutlineChat className="mr-2 h-5 w-5 text-gray-500" />
                  <span className="truncate">{chat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="flex items-center px-3 py-2 w-full text-left text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <HiOutlineCog className="mr-2 h-5 w-5" />
              <span>Settings</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center px-3 py-2 w-full text-left text-gray-700 hover:bg-gray-100 rounded-md mt-2"
            >
              <HiOutlineLogout className="mr-2 h-5 w-5" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
