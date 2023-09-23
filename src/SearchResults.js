import './SearchResults.css';
import Tracklist from './Tracklist';

  
const SearchResults = (props) => {

    return (
        <div className="searchResults">
            <Tracklist tracks={props.tracks} onAdd={props.onAdd} buttonClass="buttonAdd" />
        </div>
    )
    
}
export default SearchResults;