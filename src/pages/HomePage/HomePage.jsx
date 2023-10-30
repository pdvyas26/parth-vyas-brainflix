import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo'
import Comments from '../../components/Comments/Comments'
import Reviewer from '../../components/Reviewer/Reviewer'
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";
import '../HomePage/HomePage.scss'

function HomePage() {
  const params = useParams();

const apiKey = "d1007b1d-c54d-4781-80cb-cc1ff5db11be";
const [videosData, setVideosData] = useState([]);
const [selectedVideo, setSelectedVideo] = useState({});


useEffect (()=> {
  const getVideos = async () => {
    const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`); 
    setVideosData(response.data);
  }
  getVideos ();
}, []);



useEffect(() => {
  async function fetchVideo() {
    let videoId = params.id;
    if (!videoId && videosData.length > 0) {
      videoId = videosData[0].id;
    }

    if (videoId) {
      const selectedResponse = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
      );
      setSelectedVideo(selectedResponse.data);
    }
  }

  fetchVideo();
}, [params.id, videosData]);


  return (
    <>
    
    <SelectedVideo video={selectedVideo} />
    <div className="main">
      <div className="main__container">
        <Reviewer />
        <Comments video={selectedVideo}/>
      </div>
      <div className="main__video-list">
        <h3 className="main__next-videos">Next Videos</h3>
        <VideoList videosData={videosData} selectedVideo={selectedVideo} />
      </div>
    </div>

      
    </>
  );
};

export default HomePage;
