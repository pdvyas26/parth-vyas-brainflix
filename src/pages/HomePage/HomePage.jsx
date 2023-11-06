import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo'
import Comments from '../../components/Comments/Comments'
import Reviewer from '../../components/Reviewer/Reviewer'
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";
import '../HomePage/HomePage.scss'

function HomePage() {
  const params = useParams();

const [videosData, setVideosData] = useState([]);
const [selectedVideo, setSelectedVideo] = useState({});

useEffect (()=> {
  const getVideos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/videos`);  
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
        `${process.env.REACT_APP_API_URL}/videos/${videoId}`
      );
      setSelectedVideo(selectedResponse.data);
    };
  };

  fetchVideo();
}, [params.id, videosData]);


  return (
    <>
      <SelectedVideo video={selectedVideo} />
      <div className="main">
        <div className="main__container">
          <Reviewer commentsLength={selectedVideo.comments || []}  />
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
