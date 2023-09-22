import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import React, {useState,useEffect} from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    console.log(searchTerm);
  },[searchTerm]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar onSearch={setSearchTerm}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
