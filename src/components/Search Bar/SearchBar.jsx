import React from "react";

function SearchBar() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered m-2 w-full max-w-xs p-2"
        />
      </div>
      <button className=", btn btn-secondary my-6">Search</button>
    </div>
  );
}

export default SearchBar;
