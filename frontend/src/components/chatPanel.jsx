import { useState, useEffect, useRef } from "react";
import { ChevronDown, Send } from "lucide-react";

const ChatPanel = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  
  const ws = useRef(null);

  useEffect(() => {
    if (open) {
      // Connect WebSocket when panel opens
      ws.current = new WebSocket('ws://127.0.0.1:8000/ws/chat/');
      
      ws.current.onopen = () => setConnected(true);
      ws.current.onclose = () => setConnected(false);
      ws.current.onmessage = (e) => {
        const data = JSON.parse(e.data);
        setMessages(prev => [...prev,{
          text:data.message,
          time:data.time,
        }
        ]);
      };
    }
    
    return () => {
      if (ws.current) ws.current.close();
    };
  }, [open]);

  const currentUser='abhishek';

  const handleSendMessage = () => {
    if (message.trim() && connected) {
      ws.current.send(JSON.stringify({ message,sender:currentUser }));
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-black w-full max-w-md">
      <div className="flex items-center justify-between p-2">
        <span className="text-white font-medium">
          Chats
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="bg-black text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-gray-800 transition-colors"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="bg-white border border-white">
          <div className="text-green-400 font-mono h-100 p-3 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-sm">
                {connected ? "Connected! Type a message..." : "Connecting..."}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-2 text-sm">
                  <div className="px-3 py-2 rounded bg-gray-200 text-black inline-block">
                   {msg.text} <span className="text-xs">{msg.sender}</span>
                   {msg.time}
                </div>
            
                </div>
                
              ))
            )}
          </div>
          
          <div className="p-2 border border-gray-600 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter message..."
              className="flex-1 bg-gray-100 w-20 border border-gray-600 rounded-full px-3 py-1 text-sm placeholder-black"
            />
            <button
              onClick={handleSendMessage}
              className="bg-black text-white text-sm   px-3 py-2 rounded hover:bg-gray-400 transition-colors flex items-center"
            >
              send
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPanel;