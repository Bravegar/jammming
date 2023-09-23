import './Playlist.css';
import Tracklist from './Tracklist';
const songList = ["Hello Test"];
const Playlist = () => {
    return (
        <div className ="playlist">
            <Tracklist songList={songList} buttonClass="buttonRemove"/>
        </div>
    )
    
}
export default Playlist;