function Assign5({message,onPlay}) {
    function handleClick() {
        onPlay(message);
    }
    return (
        <div>
            <h2>Assignment 5</h2>
            <button onClick={handleClick}>Tap</button>
        </div>
    );
}

export default Assign5;