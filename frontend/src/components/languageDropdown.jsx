import React from 'react';


const LanguageDropDown=({onChange})=>{
  
  return(
    <select onChange={onChange} class="bg-[#1E1E1E] text-white h-9 ml-3  rounded-md
               focus:outline-none 
               ">
  <option value="" disabled selected>Select Language</option>
  <option className="bg-black hover:bg-gray-100 ">python</option>
  <option className="bg-black ">javascript</option>
  <option className="bg-black ">cpp</option>
</select>

  )
}

export default LanguageDropDown;