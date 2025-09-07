import React,{useState} from 'react';
import EditorView from '../components/editor.jsx'
import Navbar from '../components/navbar.jsx'
import Terminal from '../components/Terminal.jsx'
const Home=()=>{
    const [open, setOpen] = useState(false);

  return(
    <div>
      <Navbar onRun={()=>setOpen(true)}/>
    <div className="flex h-screen">
      
      <div className="w-64 bg-gray-900 p-4">
    </div>
    <div className="flex-1 ">
                <EditorView open={open} onToggle={()=>setOpen(!open)}/>

    </div>
    
    </div>
    </div>
  )

}

export default Home;