import React, { useState } from "react";
import SearchBar from "./components/Search Bar/SearchBar";
import Tracklist from "./components/Track/Tracklist";
import SearchResult from "./components/Left Tab/SearchResult";

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
        <Tracklist />
        <SearchResult />
      </div>
    </div>
  );
}

export default App;
