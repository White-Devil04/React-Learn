import './Video.css';
import PlayBtn from './PlayBtn';
function Video({video}) {

  return (
    <div className="Video">
        <img className="thumbnail" src={video.image} alt={video.title} />
        <h2>{video.title}</h2>
        <p>{video.views} views | {video.uploadDate}</p>
        <p>{video.channel} {video.tick?'✅':''}</p>
        <PlayBtn onPlay={()=>console.log("Play -",video.title)} onPause={()=>console.log("Pause -",video.title)}>{video.title}</PlayBtn>
    </div>
  );
}
export default Video;