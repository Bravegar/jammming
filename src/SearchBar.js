import './SearchBar.css'
import React,{useState} from 'react';
import { getListOfTracks } from './spotifyService';

const SearchBar = ({onSearch,access_token,updateSearchList}) => {

    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <>
            <input type="text" className="searchField" value={inputValue} onChange={handleInputChange}/>
            
            <input type="submit" className="searchButton" value="Search" onClick={()=>{
                getListOfTracks(inputValue, access_token,updateSearchList)}
            }/>
            
        </>
    )
}

export default SearchBar;