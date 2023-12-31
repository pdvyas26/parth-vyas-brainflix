import './SelectedVideo.scss'
import ViewsIcon from '../../assets/images/Icons/views.svg'
import LikesIcon from '../../assets/images/Icons/likes.svg'

function SelectedVideo (props){

  function displayTimestamp(timestamp){
    let formattedTimestamp = new Date(timestamp).toLocaleDateString();
    return formattedTimestamp;
  }

return (
  <>
    <div className='video-wrapper'>
      <video className = "video-player" src={props.video.video + '?api_key=test'} poster={`${process.env.REACT_APP_API_URL}/${props.video.image}`} controls></video>
    </div>
    <div className="highlights-wrapper">
      <h2 className = "video-player__title">{props.video.title}</h2>
      <div className = "highlights">
        <div className = "highlights__left">
            <h4 className="highlights__left-channel" >{props.video.channel}</h4>
            <p className="highlights__left-date">{displayTimestamp(props.video.timestamp)}</p>
        </div>
        <div className = "highlights__right">
          <div className = "highlights__right-container">
            <img className="highlights__right-icon" src={ViewsIcon} alt="views icon" />
            <p>{props.video.views}</p>
          </div>
          <div className = "highlights__right-container">
            <img className="highlights__right-icon" src={LikesIcon} alt="Likes Icon" />
            <p>{props.video.likes}</p>
          </div>
        </div>
      </div>
      <p className = "highlights__description">{props.video.description}</p>
    </div>
  </>
)};

  export default SelectedVideo;