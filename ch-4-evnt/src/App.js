import './App.css';
import PlayBtn from './Component/PlayBtn';
import Video from './Component/Video';
function App() {
  let videos = [
    {
      title: 'Video 1',
      views: 1000,
      uploadDate: '1 Year ago',
      channel: 'channel 1',
      tick: true,
      image: 'https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Video 2',
      views: 2000,
      uploadDate: '2 Months ago',
      channel: 'channel 2',
      tick: false,
      image: 'https://plus.unsplash.com/premium_photo-1676320103037-fae0b1d3668d?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Video 3',
      views: 3000,
      uploadDate: '5 Days ago',
      channel: 'channel 3',
      tick: true,
      image: 'https://images.unsplash.com/photo-1709432729431-2a39c4b5211b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

  ];
  return (
    <div className="App">
      <header className="App-header">
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </header>
        <div style={{clear:'both'}}>
          <PlayBtn />
        </div>
    </div>
  );
}

export default App;
