import './Tracklist.css';
import Track from './Track';

const Tracklist = () => {
    const songList = [
        "Summer Breeze",
        "Bohemian Rhapsody",
        "Hotel California",
        "Imagine",
        "Smells Like Teen Spirit",
        "Billie Jean",
        "Sweet Child o' Mine",
        "Wonderwall",
        "Purple Haze",
        "Like a Rolling Stone",
        "Yesterday",
        "Stairway to Heaven",
        "Let It Be",
        "Hallelujah",
        "Yesterday",
        "Don't Stop Believin'",
        "What's Going On",
        "Every Breath You Take",
        "I Want to Hold Your Hand",
        "Rolling in the Deep",
        "Like a Prayer",
        "Livin' on a Prayer",
        "My Generation",
        "Losing My Religion",
        "Hey Jude"
      ]
    return (
    <div className="Tracklist">
        {songList.map(song => {return (<Track name={song}/>)})}
    </div>)
    
}
export default Tracklist;