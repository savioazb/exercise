"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Dropdown({ title, info, handleCategoryChange }) {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className={`group relative w-full rounded-lg border-2 border-purple-600 bg-gray-50 px-4 py-2 hover:border-purple-500 hover:bg-purple-500 ${
        isDropdownOpen && "rounded-b-none bg-purple-500"
      }`}
    >
      <div
        className={`z-50 flex items-center justify-between text-sm uppercase`}
      >
        <span
          className={`w-[200px] truncate font-medium group-hover:text-gray-50 ${
            isDropdownOpen ? "text-gray-50" : "text-purple-600"
          }`}
        >
          {`${newTitle ? newTitle : "All " + title}`}
        </span>
        <i
          className={`transition-transform duration-300 ease-in group-hover:text-gray-50 ${
            isDropdownOpen ? "-rotate-180 text-gray-50" : "text-purple-600"
          }`}
          aria-hidden="true"
        >
          <ChevronDown width={18} />
        </i>
      </div>

      <div>
        <ul
          className={`scrollbar absolute -left-[2px] top-full z-50 w-[calc(100%+4px)]  overflow-y-auto drop-shadow-md transition-max-height duration-300 ${
            isDropdownOpen ? "max-h-[250px]" : "max-h-[0px]"
          }`}
        >
          {info.dropdown.map((category) => (
            <li
              onClick={() => {
                handleCategoryChange(category.alt);
                setNewTitle(category.title);
              }}
              key={category.alt}
              className="cursor-pointer bg-gray-50 p-4 transition ease-in-out hover:bg-gray-200"
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
