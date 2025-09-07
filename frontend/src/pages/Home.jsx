import React,{useState} from 'react';
import EditorView from '../components/editor.jsx'
import Navbar from '../components/navbar.jsx'
import Terminal from '../components/Terminal.jsx'
import axios from 'axios'
const Home=()=>{
    const [open, setOpen] = useState(false);
    const[language,setLanguage]=useState('')
    const [code, setCode] = useState("// Start coding...");
    console.log(language);

    const codeData = {
  language: language || 'javascript',
  code:code      
};
    console.log(codeData);


    const handleChange=async()=>{

      
  
        try{
          const response=await axios.post('http://127.0.0.1:8000/editor/hi/');
          console.log(response.data); 
        }
        catch(error){
          console.log(error);
        }
      }

  return(
    <div>
      <Navbar onRun={()=>setOpen(true)} handleChange={handleChange} onChange={(e)=>setLanguage(e.target.value)}/>
    <div className="flex h-screen">
      
      <div className="w-64 bg-[#1E1E1E] p-4">
    </div>
    <div className="flex-1  ">
                <EditorView code={code} setCode={setCode} open={open} onToggle={()=>setOpen(!open)}/>

    </div>
    
    </div>
    </div>
  )

}

export default Home;