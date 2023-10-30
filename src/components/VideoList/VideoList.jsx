import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./VideoList.scss";
import axios from "axios";

function  VideoList(props) {

  console.log(props);


  return (
    <ul className="video-list">
      {props.videosData?.filter((video) => video.id !== props.selectedVideo.id).map((video) => {
      return (
        <li key={video.id} className="video-list__item">
          <div className="video-list__item-container">
            <div className="video-list__img-container">
              <Link to={`/${video.id}`}><img src={video.image} alt="video image" className="video-list__img"/></Link>
            </div>
            <div>
              <h3 className="video-list__title">{video.title}</h3>
              <p className="video-list__channel">{video.channel}</p>
            </div>
          </div>
        </li>
      )})}       
    </ul>
  );
}

export default VideoList;



// const apiKey = "d1007b1d-c54d-4781-80cb-cc1ff5db11be";
// const [videosData, setVideosData] = useState([]);
// const [selectedVideo, setSelectedVideo] = useState({});

// useEffect (()=> {
//   const getVideos = async () => {
//     const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`); 
//     setVideosData(response.data);
//   }
//   getVideos ();
// }, []);

























// function VideoList(props) {

//   return (
    // <ul className="video-list">
    //   {props.videoData
    //     .filter((video) => video.id !== props.selectedVideo.id)
    //     .map((video) => {
    //       return (
    //         <li onClick={() => {props.handleVideoSelection(video.id);}} key={video.id} className="video-list__item">
    //           <div className="video-list__item-container">
    //             <div className="video-list__img-container">
    //               <img src={video.image} alt="video image" className="video-list__img"/>
    //             </div>
    //             <div>
    //               <h3 className="video-list__title">{video.title}</h3>
    //               <p className="video-list__channel">{video.channel}</p>
    //             </div>
    //           </div>
    //         </li>
    //       );
    //     })}
    // </ul>
//   );
// }
// export default VideoList;


