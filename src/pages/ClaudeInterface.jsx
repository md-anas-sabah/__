import { PlusCircle, Menu, ArrowUp } from "lucide-react";
import SVGComponent from "../assets/SVG";
import Sidebar from "../components/Sidebar";

export default function ClaudeInterface() {
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
              <div className="bg-[#30302E] rounded-xl p-4 relative">
                <textarea
                  className="w-full bg-transparent outline-none resize-none text-zinc-300"
                  placeholder="How can I help you today?"
                  rows={1}
                />
                <div className="flex justify-between mt-3">
                  <div className="flex space-x-3">
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                      <PlusCircle className="w-5 h-5" />
                    </button>
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors">
                      <Menu className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-zinc-400">
                      Claude 3.7 Sonnet
                    </span>
                    <button className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors">
                      <ArrowUp className="w-5 h-5 text-zinc-300" />
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
