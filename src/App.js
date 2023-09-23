import './App.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import React, {useState,useEffect} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playlist, setPlaylist] = useState({"tracks":[]});
  const [searchResults, setSearchResults] = useState(
    {
      "tracks": [
        {
          "id": "3n3Ppam7vgaVa1iaRUc9Lp",
          "name": "Bohemian Rhapsody",
          "artists": [
            {
              "id": "1dfeR4HaWDbWqFHLkxsg1d",
              "name": "Queen"
            }
          ],
          "album": {
            "id": "0vYkRb2uOJs9V9RPPsWBUR",
            "name": "A Night at the Opera",
            "release_date": "1975-11-21",
            "total_tracks": 12
          },
          "duration_ms": 354320,
          "popularity": 85
        },
        {
          "id": "6e40mgJiCid5HRAGrbpGA6",
          "name": "Hotel California",
          "artists": [
            {
              "id": "0ECwFtbIWEVNwjlrfc6xoL",
              "name": "Eagles"
            }
          ],
          "album": {
            "id": "0Ft5mXM8vWmYjdmta2R2tX",
            "name": "Hotel California",
            "release_date": "1976-12-08",
            "total_tracks": 9
          },
          "duration_ms": 391373,
          "popularity": 88
        },
        {
          "id": "0tL3YwExJ1Hl0Skc4MPrB9",
          "name": "Imagine",
          "artists": [
            {
              "id": "4x1nvY2FN8jxqAFA0DA02H",
              "name": "John Lennon"
            }
          ],
          "album": {
            "id": "7vqH7Vd8XDx9m6y9jzj67b",
            "name": "Imagine",
            "release_date": "1971-09-09",
            "total_tracks": 10
          },
          "duration_ms": 184133,
          "popularity": 79
        }
      ]
    }
  );
  
  const moveTrackToPlaylist = (track) => {
    // Check if the track is not already in the playlist
    if (!playlist.tracks.find(playlistTrack => playlistTrack.id === track.id)) {
      // Create a new copy of the playlist object with the added track
      const updatedPlaylist = {
        ...playlist,
        tracks: [...playlist.tracks, track],
      };
      console.log(playlist);
      console.log(updatedPlaylist);
      // Update the playlist state with the new copy
      setPlaylist(updatedPlaylist);
    }
  };
  
  const moveTrackBackToSearch = (track) => {
    // Filter the track out of the playlist's tracks array
    const updatedPlaylistTracks = playlist.tracks.filter(playlistTrack => playlistTrack.id !== track.id);
  
    // Create a new copy of the playlist object with the updated tracks array
    const updatedPlaylist = {
      ...playlist,
      tracks: updatedPlaylistTracks,
    };
  
    // Update the playlist state with the new copy
    setPlaylist(updatedPlaylist);
  };
  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);


  return (
    <div className="App">
      
        <SearchBar onSearch={setSearchTerm}/>
        
        <SearchResults tracks={searchResults} onAdd={moveTrackToPlaylist}/>
        
        <Playlist tracks={playlist} onRemove={moveTrackBackToSearch}/>
        
    </div>
  );
}

export default App;
