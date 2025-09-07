import {Button} from './ui/button'
import Terminal from './Terminal.jsx'

const Navbar=({onRun})=>{

  return(
    <nav className="flex bg-black  00 h-10 w-full">
      <div className=" flex flex-1">
        
      </div>
      <div className="flex flex-1">
      
      </div>
      <div className="flex flex-1 pl-5">
        <Button onClick={onRun} className="cursor-pointer hover:w-15">Run</Button>
      </div>
      

    </nav>
  )
}

export default Navbar;