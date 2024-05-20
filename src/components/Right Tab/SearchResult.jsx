import React from "react";
import Playlist from "../Right Tab/Playlist";

function SearchResult() {
  return (
    <div>
      <div
        className="m-2 mx-10 h-screen p-2"
        style={{ backgroundColor: "rgba(82, 72, 143, 0.9)", height: "100%" }}
      >
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Playlist Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="my-20">
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;