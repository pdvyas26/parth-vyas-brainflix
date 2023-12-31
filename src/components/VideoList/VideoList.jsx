import { Link } from "react-router-dom";
import "./VideoList.scss";

function  VideoList(props) {

  return (
    <ul className="video-list">
      {props.videosData?.filter((video) => video.id !== props.selectedVideo.id).map((video, index) => {
      return (
        <li key={index} className="video-list__item">
          <div className="video-list__item-container">
            <div className="video-list__img-container">
              <Link to={`/${video.id}`}>
                <img src={video.image} alt="video image" className="video-list__img"/>
              </Link>
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







