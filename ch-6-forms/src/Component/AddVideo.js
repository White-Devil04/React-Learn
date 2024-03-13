import './AddVideo.css';
import { useState } from 'react';
const initialState = {
    channel: 'Codevolution',
    uploadDate: '1 Year ago',
    varified: true,
    title: '',
    views: '',
    image: 'https://images.unsplash.com/photo-1707343844436-37580f155ed2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
function AddVideo({addVideos}) {
    const [video, setVideo] = useState(initialState);
    const handleClick = (e) => {
        e.preventDefault();
        addVideos(video);
        setVideo(initialState)
        // console.log(video);
    }
    function handleChange(e) {
        // console.log(e.target.name,e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        // console.log(video);
    }
    return (
        <form>
            <input type="text" name="title" onChange={handleChange} placeholder='Title' value={video.title}/>
            <input type="text" name="views" onChange={handleChange} placeholder='Views' value={video.views}/>
            <button onClick={handleClick}>
                Add Video
            </button>
        </form>
    );
}

export default AddVideo;