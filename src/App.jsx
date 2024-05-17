import React, { useState } from "react";
import SearchBar from "./components/Search Bar/SearchBar";

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
    </div>
  );
}

export default App;
