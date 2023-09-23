import './Playlist.css';
import Tracklist from './Tracklist';

const Playlist = (props) => {
    return (
        <div className ="playlist">
            <Tracklist tracks={props.tracks} onRemove={props.onRemove} buttonClass="buttonRemove"/>
        </div>
    )
    
}
export default Playlist;