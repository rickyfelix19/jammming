import React from "react";

// import { MultipleTracks } from "./MultipleTracks";

function Track(props) {
  // let singleTrack = [{ title: "hot beats", name: "shaan", playlist: "single" }];
  return (
    <div>
      <div className="card m-2 bg-base-100 p-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.track.title}</h2>
          <p>
            {props.track.name} | {props.track.playlist}
          </p>
        </div>
        <button className="btn btn-secondary">Add Music</button>
      </div>
    </div>
  );
}

export default Track;
