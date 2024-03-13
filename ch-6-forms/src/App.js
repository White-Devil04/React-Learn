import './App.css';
import AddVideo from './Component/AddVideo.js';
import Videolist from './Component/Videolist.js';
import {useState} from 'react';
import VideoDB from './Data/VideoDB.js';
function App() {
  const [videos, setVideos] = useState(VideoDB);

  function addVideos(video) {
    setVideos([...videos, 
      {...video, id:videos.length+1}]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='add-video'>
        <AddVideo addVideos={addVideos}></AddVideo>
        </div>
        <Videolist videos={videos}/>
      </header>
    </div>
  );
}

export default App;
