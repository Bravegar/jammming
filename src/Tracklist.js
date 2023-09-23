import './Tracklist.css';
import Track from './Track';

const Tracklist = (props) => {
    
    return (
    <div className="Tracklist">
        {console.log(props.tracks)}

        {props.tracks['tracks']['items'].map(track=> {return <Track track={track} onAdd={props.onAdd} onRemove={props.onRemove}/>})}
        
    </div>)
    
}
export default Tracklist;