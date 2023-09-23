import './App.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import React, {useState,useEffect} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [playList, setPlayList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);


  return (
    <div className="App">
      
        <SearchBar onSearch={setSearchTerm}/>
        
        <SearchResults />
        
        <Playlist />
    </div>
  );
}

export default App;
