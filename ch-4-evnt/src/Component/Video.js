import './Video.css';
function Video({video}) {

  return (
    <div className="Video">
        <img className="thumbnail" src={video.image} alt={video.title} />
        <h2>{video.title}</h2>
        <p>{video.views} views | {video.uploadDate}</p>
        <p>{video.channel} {video.tick?'✅':''}</p>
    </div>
  );
}
export default Video;