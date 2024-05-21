import React from "react";
// import Playlist from "../Right Tab/Playlist";
import Tracklist from "../Left Tab/Tracklist";

const SearchResult = (props) => {
  return (
    <div>
      <h1 className="mx-2 my-3">Results</h1>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResult;
