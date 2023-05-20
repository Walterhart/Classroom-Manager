import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Dropdown({ data, onSelectClass }) {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(""); 

  // Function to toggle dropdown visibility
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectClass(option)
  };

  return (
    <div className="relative w-44  ">
      {/* Dropdown button */}
      <button
        type="button"
        
        className="w-full bg-white border-4 border-gray-900 py-2 px-4 text-left flex items-center justify-between " 
        onClick={handleToggleDropdown}
      >
        {/* Display selected option or default text */}
       
        {selectedOption ? selectedOption.name : "Select class"}
        
        <FaCaretDown className="ml-2" />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-900 mt-1 py-1 px-2 rounded">
          {/* Map through data prop and render each option */}
          {data.map((option) => (
            <li
              key={option.id}
              className="cursor-pointer hover:bg-blue-600 hover:text-white py-1 px-2 rounded"
              onClick={() => handleSelectOption(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
