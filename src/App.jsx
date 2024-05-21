import React, { useState } from "react";
import SearchBar from "./components/Search Bar/SearchBar";
import Tracklist from "./components/Left Tab/Tracklist";
// import SearchResult from "./components/Left Tab/SearchResult";
import Playlist from "./components/Right Tab/Playlist";

import { MultipleTracks } from "./components/Left Tab/MultipleTracks";

function App() {
  return (
    <div>
      <div className="items-center justify-center text-center">
        <h1
          className="m-2 p-4"
          style={{ backgroundColor: "rgba(82, 72, 143, 0.9)" }}
        >
          Jammming
        </h1>
        <SearchBar />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Tracklist track={MultipleTracks} />
        <Playlist />

        {/* <SearchResult /> */}
      </div>
    </div>
  );
}

export default App;
