import React, { useState } from "react";

function SearchBar({ sCity }) {
  const [city, setCity] = useState("");
  function handleChange(event) {
    setCity(event.target.value);
  }

  function sendData(event) {
    sCity(city);
    event.preventDefault();
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      sCity(city);
    }
  }

  return (
    <div className="flex flex-row py-4 px-6">
      <input
        type="text"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={city}
        placeholder="Enter City"
        className="flex-grow px-5 py-2 rounded-tl-3xl rounded-bl-3xl bg-zinc-800 text-white border border-t-1 border-l-1 border-b-1 border-zinc-500"
      />
      <button type="submit" onClick={sendData}>
        <div className="py-2 pl-3 pr-4 text-gray-400 rounded-tr-3xl rounded-br-3xl bg-zinc-800 border border-t-1 border-r-1 border-b-1 border-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default SearchBar;
