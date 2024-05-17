import React from "react";

function Track() {
  return (
    <div>
      <div className="card m-2 bg-base-100 p-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>Artist | Playlist</p>
        </div>
        <button className="btn btn-secondary">Add Music</button>
      </div>
    </div>
  );
}

export default Track;
