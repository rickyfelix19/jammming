import React, { useCallback } from "react";

import Tracklist from "../Left Tab/Tracklist";

function Playlist(props) {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );
  return (
    <div>
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
            <div>
              <Tracklist
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
              />
            </div>
          </div>
          <div className="my-20">
            <button className="btn btn-secondary">Save to Playlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
