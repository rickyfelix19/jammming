import React from "react";
import Track from "./Track";

function Tracklist(props) {
  return (
    <div>
      <div
        className="m-2 h-screen w-2/5 p-2"
        style={{ backgroundColor: "rgba(82, 72, 143, 0.9)", height: "100%" }}
      >
        <h1 className="m-2">Results</h1>
        <Track />
        <Track />
        <Track />
      </div>
    </div>
  );
}

export default Tracklist;
