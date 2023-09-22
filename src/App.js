import './App.css';
import SearchBar from './SearchBar';
import Tracklist from './Tracklist';
import React, {useState,useEffect} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);


  return (
    <div className="App">
      
        <SearchBar onSearch={setSearchTerm}/>
        <Tracklist />
        
        
    </div>
  );
}

export default App;
