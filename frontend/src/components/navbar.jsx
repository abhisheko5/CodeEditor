import {Button} from './ui/button'
import Terminal from './Terminal.jsx'
import LanguageDropDown from './languageDropdown.jsx'
import axios from 'axios'


const Navbar=({onRun,onChange,handleChange})=>{

  
  return(
    <nav className="flex bg-black  00 h-10 w-full">
      <div className=" flex flex-1">
        <h1 className="text-white p-2 cursor-pointer">File</h1>
        <h1 className="text-white p-2 ">Edit</h1>
        <h1 className="text-white p-2">View</h1>

      </div>
      <div className="flex flex-1">
      
      </div>
      <div className="flex flex-1 pl-5">
        <Button onClick={()=>{onRun(),handleChange()}}  className="cursor-pointer hover:w-15">Run</Button>
        <LanguageDropDown onChange={onChange}/>
      </div>

      

    </nav>
  )
}

export default Navbar;