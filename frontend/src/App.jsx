import { useEffect, useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button"


function App() {
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("// Start coding...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hello/") // Django API endpoint
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div className="ml-100">
      <h1 className="text-5xl text-center font-semibold">Ai code editor</h1> 
          <Button>Click me</Button>

      <Editor
        height="90vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
}

export default App;
