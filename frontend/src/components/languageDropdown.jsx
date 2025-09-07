import React,{useState} from 'react';


const LanguageDropDown=({onChange})=>{
  
  return(
    <select onChange={onChange} class="bg-[#1E1E1E] text-white h-9 ml-3  rounded-md
               focus:outline-none 
               ">
  <option value="" disabled selected>Select Language</option>
  <option className="bg-black hover:bg-gray-100 ">Python</option>
  <option className="bg-black ">JavaScript</option>
  <option className="bg-black ">C++</option>
</select>

  )
}

export default LanguageDropDown;