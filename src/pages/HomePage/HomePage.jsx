import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
// import videoData from '../../data/video-details.json';
import Comments from '../../components/Comments/Comments'
import Reviewer from '../../components/Reviewer/Reviewer'
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";

function HomePage() {
  const params = useParams();

  // const [videos, setVideos] = useState(videoData);
  // const [selectedVideo, setSelectedVideo] = useState(videos[0]);
                    
  // function handleVideoSelection(id) {
  //   const foundVideo = videoData.find((video) => video.id === id);
  //   setSelectedVideo(foundVideo);
  // }

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

// useEffect (()=> {
//   async function fetchVideo() {
//     if (!params.id) {
//       // if there is no params.id set the selectedVideo to the default first element of recipes array
//       //  1) get all recipes
//       //  2) get selected video using the first element of the videos data (response.data[0].id)

//       const response = await axios.get(
//         `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
//       ); //

//       const selectedResponse = await axios.get(
//         `https://project-2-api.herokuapp.com/videos/${response.data[0].id}?api_key=${apiKey}`
//       );
//       // console.log(selectedResponse.data);
//       setSelectedVideo(selectedResponse.data);
//     } else {
//       // else if there is a params.id use it to get the selectedRecipe
//       const selectedResponse = await axios.get(
//         `https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`
//       );
//       // console.log(selectedResponse.data);
//       setSelectedVideo(selectedResponse.data);
//     }
//   }

//   // Call the fetchRecipe() function
//   fetchVideo();
// }, [params.id]);

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
        {/* <VideoList videoData={videosData} selectedVideo={selectedVideo} /> */}
      </div>
    </div>
    <VideoList videosData={videosData} selectedVideo={selectedVideo} />

      
    </>
  );
};

export default HomePage;
























//copy of the original home page as of oct-26 12:26am


// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import SelectedVideo from '../../components/SelectedVideo/SelectedVideo';
// import videoData from '../../data/video-details.json';
// import Comments from '../../components/Comments/Comments'
// import Reviewer from '../../components/Reviewer/Reviewer'
// import VideoList from "../../components/VideoList/VideoList";




// function HomePage() {


//   const [videos, setVideos] = useState(videoData);
//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);

//   function handleVideoSelection(id) {
//     const foundVideo = videoData.find((video) => video.id === id);
//     setSelectedVideo(foundVideo);
//   }

//   return (
//     <>
    
//     <SelectedVideo video={selectedVideo} />
//     <div className="main">
//       {/* <div className="main__container">
//         <Reviewer />
//         <Comments video={selectedVideo}/>
//       </div> */}
//       <div className="main__video-list">
//         <h3 className="main__next-videos">Next Videos</h3>
//         <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}/>
//       </div>
//     </div>
      
//     </>
//   );
// };

// export default HomePage;