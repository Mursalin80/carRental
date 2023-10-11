import React from "react";

const SearchInput = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-[20px] mb-3 text-gray-400">
        Search what you need.
      </h2>
      <div className="flex justify-center">
        <div className="flex bg-gray-100 p-1 px-5 gap-2 rounded-full divide-x">
          <div className="flex items-center">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#c4c4c4"
              className="w-5 h-5"
            >
              <path
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="#cbc8c8"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                stroke="#cbc8c8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <input
              type="text"
              className="p-2 bg-transparent outline-none"
              placeholder="Location"
            />
          </div>
          <input
            type="date"
            className="p-2 bg-transparent outline-none text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
