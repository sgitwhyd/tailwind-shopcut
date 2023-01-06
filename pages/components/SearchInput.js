import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ Placeholder, onChangeHandler }) => {
  return (
    <>
      <div className="search">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <input
            type="text"
            className="relative w-full rounded-lg  bg-gray-input py-4  pl-8 text-base text-gray-primary focus:text-gray-900 focus:outline-none"
            placeholder={Placeholder}
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <span className="absolute inset-y-0  right-3 flex items-center pl-2 focus:bg-gray-input">
            <button
              type="submit"
              className="focus:shadow-outline p-1 focus:outline-none"
            >
              <FiSearch size={25} />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
