import { PlusCircle, Menu, ArrowUp, Plus } from "lucide-react";
import SVGComponent from "../assets/SVG";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function ClaudeInterface() {
  const [isHovered, setIsHovered] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const buttonBgColor = inputText.trim() ? "bg-[#D97757]" : "bg-[#7D4A38]";

  return (
    <div className="flex h-screen bg-[#262624] text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col -mt-40">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center w-full max-w-4xl px-4">
            <div className="flex  items-center mb-14">
              <div className="text-amber-500">
                <SVGComponent />
              </div>
              <h1 className="text-4xl -mb-5 text-[#C2C0B6] font-cardo font-normal ">
                How's it going, Anas?
              </h1>
            </div>

            <div className="w-[80%] mx-auto">
              <div
                className={`bg-[#30302E] rounded-xl p-4 relative border border-[#464643] cursor-text ${
                  isHovered ? "border-gray-500" : "border-[#464643]"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <textarea
                  className="w-full bg-transparent text-sm outline-none resize-none text-zinc-300"
                  placeholder="How can I help you today?"
                  rows={2}
                  value={inputText}
                  onChange={handleTextChange}
                />
                <div className="flex justify-between mt-3">
                  <div className="flex space-x-3">
                    <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors  border border-[#464643] rounded-lg">
                      <Plus className="w-[18px] h-[18px]" />
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-700 rounded-lg">
                      <SlidersHorizontal className="w-[18px] h-[18px] transform rotate-180" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-[#FAF9F4] font-cardo font-thin">
                      Claude 3.7 Sonnet
                    </span>
                    <button
                      className={`p-2 bg-[#7D4A38] ${buttonBgColor}  rounded-md transition-colors`}
                    >
                      <ArrowUp className="w-[18px] h-[18px] text-zinc-300 " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
