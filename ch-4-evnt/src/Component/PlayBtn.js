import './PlayBtn.css';
function PlayBtn({children,message,onPlay,onPause}) {
  let playing=false; //don't use this approach in real projects
  function handleClick(e) {
    // console.log(e);
    e.stopPropagation();
    if(playing) onPause();
    else onPlay();
    playing = !playing; 
  }

  return (
    <button onClick={handleClick}>{children} : {playing ? '>' : '||'}</button>
  );
}

export default PlayBtn;