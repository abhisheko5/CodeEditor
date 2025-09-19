import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Terminal from "./Terminal";

const EditorView = ({open,onToggle,setCode,code,output}) => {

  return (
    <div className="flex flex-col h-[655px] border-l-1">
  
      <div className={`transition-all ${open ? "h-3/4" : "h-full"}`}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>

  
      <Terminal output={output} open={open} onToggle={onToggle} />
    </div>
  );
};

export default EditorView;
