import React, { useState, useCallback } from "react";

import SearchBar from "./components/Search Bar/SearchBar";
import Tracklist from "./components/Left Tab/Tracklist";
import SearchResult from "./components/Search Result/SearchResult";
import Playlist from "./components/Right Tab/Playlist";

// import { MultipleTracks } from "./components/Left Tab/MultipleTracks";

import Spotify from "./utils/SpotifyAPI";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  return (
    <div>
      <div className="items-center justify-center text-center">
        <h1
          className="m-2 p-4"
          style={{ backgroundColor: "rgba(82, 72, 143, 0.9)" }}
        >
          Jammming
        </h1>
        <SearchBar onSearch={search} />
        {/* <SearchBar /> */}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* <Tracklist track={MultipleTracks} /> */}
        <SearchResult searchResults={searchResults} onAdd={addTrack} />
        {/* <SearchResults /> */}
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
};

export default App;
