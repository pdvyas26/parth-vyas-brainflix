import './MainVideo.scss'

function MainVideo(props){
    return (<section>
      <video className = "main__video-player" src={props.video + '?api_key=test'} poster={props.image} controls></video>
    </section>
    )
  }

  export default MainVideo;
  