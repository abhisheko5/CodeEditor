import React from "react";
import { ChevronDown } from "lucide-react";

const Terminal = ({ open, onToggle }) => {
  return (
    <div className="bg-black w-full">
  
      <div className="flex w-full justify-between items-center px-2 py-1">
        <h1 className="text-white text-sm">Terminal</h1>

        <button onClick={onToggle} className="text-white p-1">
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="bg-gray-800 text-green-400 font-mono h-40 p-3 overflow-y-auto">
          <p>$ your terminal is open...</p>
        </div>
      )}
    </div>
  );
};

export default Terminal;
