import './Track.css';
const Track = (props) => {
    
    return (
        <div className='Track'>
            <span className="Title">{props.name}</span>
            <br />
            <span className="SongInfo">Artist | Album</span>
            <input type="button" className={props.buttonClass} /> 
        </div>
    )
}
export default Track;