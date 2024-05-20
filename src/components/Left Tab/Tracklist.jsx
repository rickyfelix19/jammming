import React from "react";
import Track from "./Track";

const Tracklist = (props) => {
  return (
    <div>
      <div
        className="w-1/ m-2 mx-10 h-screen p-2"
        style={{ backgroundColor: "rgba(82, 72, 143, 0.9)", height: "100%" }}
      >
        <h1 className="mx-2 my-3">Results</h1>
        {props.tracks.map((track) => {
          return <Track key={track.id} track={track} />;
        })}
        {/* <Track />
        <Track />
        <Track />
        <Track /> */}
      </div>
    </div>
  );
};

export default Tracklist;