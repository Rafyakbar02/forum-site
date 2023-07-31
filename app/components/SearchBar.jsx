import React from "react";

const SearchBar = ({ query, handleClear, handleQuery }) => {
  return (
    <div>
      <div className="absolute my-2.5 mx-4">
        {query === "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="20px"
            className="text-gray-400"
          >
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M338.29 338.29L448 448"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 cursor-pointer"
            onClick={handleClear}
            height="20px"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        )}
      </div>
      <input
        type="text"
        placeholder="Search for posts"
        className="bg-gray-100 hover:bg-gray-200 pr-4 pl-12 py-2 rounded-xl inline-block w-full mb-4"
      />
    </div>
  );
};

export default SearchBar;
