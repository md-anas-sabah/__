import React, { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  MessageSquare,
  FolderClosed,
  PlusCircle,
  Menu,
} from "lucide-react";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const recentChats = [
    "Comparing Gulp Build Scripts for ...",
    "Comparing Files to Identify Missin...",
    "Fixing Multer Disk Storage Bug",
    "Frontend Replica of Claude Chat In...",
    "Frontend Contract Assignment at ...",
    "Java Compilation Error: Exceptionl...",
    "Untitled",
    "React Facebook Login Button Com...",
    "SQL Query to Join ACR Tables",
    "Vue.js Facebook Connect Button C...",
    "Vue.js Facebook Connect Button C...",
    "Untitled",
    "Potential Bugs in React Codebase",
    "Responsive Flexbox Layout for Dat...",
    "Interchanging Box Positions in Fle...",
  ];

  return (
    <div className="w-64 border-r border-zinc-800 flex flex-col">
      <div className="p-3 border-b border-zinc-800 flex items-center">
        <Menu className="w-5 h-5 mr-2 text-zinc-400" />
        <span className="text-xl font-medium">Claude</span>
      </div>

      <div className="p-2 space-y-1">
        <div className="flex items-center p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
          <PlusCircle className="w-5 h-5 mr-3 text-zinc-400" />
          <span className="text-zinc-400">New chat</span>
        </div>
        <div className="flex items-center p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
          <FolderClosed className="w-5 h-5 mr-3 text-zinc-400" />
          <span className="text-zinc-400">Projects</span>
        </div>
        <div className="flex items-center p-2 rounded-md hover:bg-zinc-800 cursor-pointer">
          <MessageSquare className="w-5 h-5 mr-3 text-zinc-400" />
          <span className="text-zinc-400">Chats</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2 text-xs text-zinc-500">Recents</div>
        <div className="space-y-1">
          {recentChats.map((chat, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-800 cursor-pointer truncate"
            >
              {chat}
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-zinc-800 flex items-center">
        <div className="w-8 h-8 rounded-md bg-zinc-700 flex items-center justify-center text-sm mr-3">
          MS
        </div>
        <div className="flex-1">
          <div className="text-sm">Md Anas Sabah</div>
          <div className="text-xs text-zinc-400">Professional plan</div>
        </div>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-zinc-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
