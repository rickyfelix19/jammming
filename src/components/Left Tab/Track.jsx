import React, { useCallback } from "react";

// import { MultipleTracks } from "./MultipleTracks";

function Track(props) {
  // let singleTrack = [{ title: "hot beats", name: "shaan", playlist: "single" }];

  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div>
      <div className="card m-2 bg-base-100 p-2 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.tracks.title}</h2>
          <p>
            {props.tracks.name} | {props.tracks.playlist}
          </p>
        </div>
        <button className="btn btn-secondary">Add Music</button>
      </div>
    </div>
  );
}

export default Track;
