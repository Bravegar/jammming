import './Tracklist.css';
import Track from './Track';

const Tracklist = (props) => {
    
    return (
    <div className="Tracklist">
        {props.songList.map(song => {return (<Track name={song} buttonClass={props.buttonClass}/>)})}
    </div>)
    
}
export default Tracklist;