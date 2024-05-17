import React from "react";

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered m-2 w-full max-w-xs p-2"
      />
    </div>
  );
}

export default SearchBar;
