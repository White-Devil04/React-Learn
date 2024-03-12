import './App.css';
import Video from './Component/Video';
import VideoDB from './Data/VideoDB';
import {useState} from 'react';
function App() {

  const [videos, setVideos] = useState(VideoDB);

  return (
    <div className="App" onClick={()=>console.log("app")}>
      <header className="App-header">
        <div style={{ clear: 'both' }}>
          <button onClick={()=> {
              setVideos([...videos,
                { id:videos.length+1,
                  title: 'Video 4',
                  views: 10000,
                  uploadDate: '7 Year ago',
                  channel: 'channel 6',
                  tick: true,
                  image: 'https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
              ]);
            }}>Click Me to Remove Videos</button>
        </div>
        <div className='video-container'>
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
