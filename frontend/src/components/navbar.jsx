import {Button} from './ui/button'
import Terminal from './Terminal.jsx'
import { ChevronDown, Send, Search } from "lucide-react";
import axios from 'axios'
import LanguageDropDown from './languageDropdown.jsx'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


const Navbar=({onRun,onChange,handleChange,handleOpenFile,setOpen})=>{


  
  return(
    <nav className="flex bg-black h-10 w-full">
      <div className="flex-1">
       <Menubar className="hover:cursor-pointer">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem onClick={handleOpenFile}>Open File</MenubarItem>
            <MenubarSeparator />
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Undo<MenubarShortcut>Ctrl+Z</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Redo
        <MenubarShortcut>Ctrl+Y</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut
        <MenubarShortcut>Ctrl+X</MenubarShortcut>

      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Copy
                <MenubarShortcut>Ctrl+C</MenubarShortcut>

      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Paste
                <MenubarShortcut>Ctrl+V</MenubarShortcut>

      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Run</MenubarTrigger>
    <MenubarContent>
     <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Terminal</MenubarTrigger>
    <MenubarContent>
    
      <MenubarSeparator />
      <MenubarItem onClick={()=>setOpen(true)}>Open </MenubarItem>
      <MenubarSeparator />
      <MenubarItem onClick={()=>setOpen(false)}>Close</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>


      </div>
      <div className="flex flex-2 w-full text-white">
      <div className="flex items-center bg-[#1E1E1E] w-full rounded p-2 my-2 border border-none hover:bg-gray-900">
  <Search className="w-5 h-5 text-gray-400 mr-2" />
  <input
    type="text"
    placeholder="Type message or Search..."
    className=" w-full outline-none text-sm text-white placeholder-gray-400"
  />
</div>
      </div>
      <div className="flex flex-1  pl-5">
        <Button onClick={()=>{onRun(),handleChange()}}  className="cursor-pointer ">Run ▶</Button>
        <LanguageDropDown onChange={onChange}/>
      </div>

      

    </nav>
  )
}

export default Navbar;