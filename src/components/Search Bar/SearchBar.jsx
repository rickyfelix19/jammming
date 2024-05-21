import React, { useState, useCallback } from "react";

function SearchBar(props) {
  const [search, setSearch] = useState("");

  const handleTermChange = useCallback((event) => {
    setSearch(event.target.value);
  });

  const searching = useCallback(() => {
    props.onSearch(search);
  }, [props.onSearch, search]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered m-2 w-full max-w-xs p-2"
          onChange={handleTermChange}
        />
      </div>
      <button className="btn btn-secondary my-6" onClick={searching}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
