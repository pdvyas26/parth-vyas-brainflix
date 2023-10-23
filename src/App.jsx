import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import SelectedVideo from './components/SelectedVideo/SelectedVideo'
import videoData from './data/video-details.json';
import Comments from './components/Comments/Comments'
import Reviewer from './components/Reviewer/Reviewer'
import VideoList from "./components/VideoList/VideoList";



function App() {


  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  function handleVideoSelection(id) {
    const foundVideo = videoData.find((video) => video.id === id);
    setSelectedVideo(foundVideo);
  }

  return (
    <>
    <Header  />
      <SelectedVideo video={selectedVideo} />
      <Reviewer />
      <Comments video={selectedVideo}/>
      <h3 className="next-videos">Next Videos</h3>
      <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}/>
    </>  
  );
};

export default App;