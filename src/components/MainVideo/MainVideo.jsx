import './MainVideo.scss'

function MainVideo(props){

  // console.log(props);
    return (<section>
      <video className = "main__video-player" src={props.video.video + '?api_key=test'} poster={props.video.image} controls></video>
    </section>
    )
  }

  export default MainVideo;
  