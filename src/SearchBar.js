import './SearchBar.css'
import React,{useState} from 'react';

const SearchBar = ({onSearch}) => {

    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <>
            <input type="text" className="searchField" value={inputValue} onChange={handleInputChange}/>
            
            <input type="submit" className="searchButton" value="Search"/>
        </>
    )
}

export default SearchBar