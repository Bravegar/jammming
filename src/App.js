import './App.css';
import CallbackComponent from './CallbackComponent';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import url from './spotifyService';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlist, setPlaylist] = useState({"tracks":{"items":[]}});
  const [userData, setUserData] = useState(null);
  const [access_token, setToken] = useState(null);
  const [searchResults, setSearchResults] = useState({"tracks":{"items":[]}});
  
  
  const moveTrackToPlaylist = (track) => {
    // Check if the track is not already in the playlist
    if (!playlist.tracks.items.find(playlistTrack => playlistTrack.id === track.id)) {
      // Create a new copy of the playlist object with the added track
      const updatedPlaylist = {
        "tracks":{
          "items":[...playlist.tracks.items,track]
        }
      };
      // Update the playlist state with the new copy
      setPlaylist(updatedPlaylist);
    }
  };
  
  const moveTrackBackToSearch = (track) => {
    // Filter the track out of the playlist's tracks array
    const updatedPlaylistTracks = playlist.tracks.items.filter(playlistTrack => playlistTrack.id !== track.id);
  
    // Create a new copy of the playlist object with the updated tracks array
    const updatedPlaylist = {
        "tracks":{
          "items": [...updatedPlaylistTracks]
        }
      }
      
    
  
    // Update the playlist state with the new copy
    setPlaylist(updatedPlaylist);
  };
  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);


  return (
    <Router>
      <div className="App">
          <a href={url}>Login to Spotify</a>
          <SearchBar onSearch={setSearchTerm} searchResults={searchResults} updateSearchList={setSearchResults} userData={userData} access_token={access_token}/>
          <SearchResults tracks={searchResults} onAdd={moveTrackToPlaylist}/>   
          <Playlist tracks={playlist} onRemove={moveTrackBackToSearch}/>
      </div>
      <Routes>  
        <Route path="/callback" element={<CallbackComponent userData={userData} setUserData={setUserData} setToken={setToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
