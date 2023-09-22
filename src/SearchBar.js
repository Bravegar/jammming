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
            <input type="text" value={inputValue} onChange={handleInputChange}/>
        </>
    )
}

export default SearchBar