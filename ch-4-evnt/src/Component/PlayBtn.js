import './PlayBtn.css';
import {useState} from 'react';
function PlayBtn({children,message,onPlay,onPause}) {
  // let playing=false; //don't use this approach in real projects
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();
    if(playing) onPause();
    else onPlay();
    // playing = !playing;
    setPlaying(!playing); 
  }

  return (
    <button onClick={handleClick}>{children} : {playing ? '⏸️': '▶️'}</button>
  );
}

export default PlayBtn;