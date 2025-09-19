import React,{useState} from 'react';
import EditorView from '../components/editor.jsx'
import Navbar from '../components/navbar.jsx'
import Terminal from '../components/Terminal.jsx'
import ChatPanel from '../components/chatPanel.jsx'
import axios from 'axios'
const Home=()=>{
    const [open, setOpen] = useState(false);
    const[language,setLanguage]=useState('');
    const[output,setOutput]=useState('');
    const [code, setCode] = useState("// Start coding...");


    const handleChange=async()=>{

      
  
        try{
          const response=await axios.post('http://127.0.0.1:8000/editor/run/',{
            language:language,
            code:code,
          });

          const result=response.data.run;
                  setOutput(result?.output || result?.stdout || result?.stderr);


          console.log(response.data); 
        }
        catch(error){
          console.log(error);
                setOutput("Error: " + error.message);

        }
      }

  return (
  <div className="h-screen flex flex-col">
    <Navbar 
      onRun={() => setOpen(true)} 
      handleChange={handleChange} 
      onChange={(e) => setLanguage(e.target.value)} 
    />

    <div className="flex flex-1 overflow-hidden">
  
      <div className="w-64 flex flex-col bg-[#1E1E1E]">
        <div className="flex-1 overflow-auto">
          
        </div>
        
        <div className="border-t border-gray-700">
          <ChatPanel />
        </div>
      </div>

  
      <div className="flex-1 overflow-auto">
        <EditorView 
          output={output} 
          code={code} 
          setCode={setCode} 
          open={open} 
          onToggle={() => setOpen(!open)} 
        />
      </div>
    </div>
  </div>
);


}

export default Home;