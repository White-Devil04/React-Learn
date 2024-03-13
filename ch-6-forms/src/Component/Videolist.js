import Video from './Video';
import './Videolist.css';
function Videolist({videos}) {
  return (
    <div className='video-container'>
      {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
    </div>
  );
}

export default Videolist;