import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Dropdown({ data, onSelectClass }) {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState(""); // State to track selected option

  // Function to toggle dropdown visibility
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
    onSelectClass(option)
  };

  return (
    <div className="relative w-72">
      {/* Dropdown button */}
      <button
        type="button"
        className="w-full bg-white py-2 px-4 text-left rounded flex items-center justify-between focus:outline-none"
        onClick={handleToggleDropdown}
      >
        {/* Display selected option or default text */}
        {selectedOption ? selectedOption.name : "Select class"}
        <FaCaretDown className="ml-2" />
      </button>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 py-1 px-2 rounded">
          {/* Map through data prop and render each option */}
          {data.map((option) => (
            <li
              key={option.id}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded"
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
