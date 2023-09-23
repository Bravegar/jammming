import './Track.css';
const Track = (props) => {
    
    return (
        <div className='Track'>
            <span className="Title">{props.track.name}</span>
            <br />
            <span className="SongInfo">{props.track.artists[0].name} | {props.track.album.name}</span>
            {props.onAdd && <input type="button" className="buttonAdd" onClick={()=>props.onAdd(props.track)}  />}
            {props.onRemove && <input type="button" className="buttonRemove" onClick={()=>props.onRemove(props.track)} />} 
        </div>
    )
}
export default Track;