import "./VideoList.scss";

function VideoList(props) {

  return (
    <ul className="video-list">
      {props.videoData
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => {
          return (
            <li onClick={() => {props.handleVideoSelection(video.id);}} key={video.id} className="video-list__item">
              <div className="video-list__item-container">
                <div className="video-list__img-container">
                  <img src={video.image} alt="video image" className="video-list__img"/>
                </div>
                <div>
                  <h3 className="video-list__title">{video.title}</h3>
                  <p className="video-list__channel">{video.channel}</p>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
export default VideoList;
