import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo.jsx'
import videoData from './data/video-details.json';
import Comments from './components/Comments/Comments'
import Reviewer from './components/Reviewer/Reviewer'
import Highlights from './components/Highlights/Highlights';



function App() {

  // let activeVideo = videoData[0];

  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <>
    <Header  />
      {/* <MainVideo image={activeVideo.image} video={activeVideo.video}/> */}
      <MainVideo video={selectedVideo} />
      <Highlights />
    
   

      {/* create a Component called VideoList */}

      
      <Comments video={selectedVideo}/>


      {/* <ul className="videos">
        {videos.filter((video) => video.id !== selectedVideo.id).map((video) => {
          return  (
              <li key={video.id} onClick={() => {

                const foundVideo = videos.find((videoObj) => videoObj.id === video.id);
                setSelectedVideo(foundVideo); // sets the state variable of selectedVideo
              }}>
                
                <img className="main__video-player" src={video.image} alt={video.name} />
                 <video className="main__video-player" src={video.image} alt={video.name} controls></video> 
                
                <h6>{video.title}</h6>
                <p>{video.description}</p>
                <Reviewer />
                 <ul>{video.comments.map((comment, index)=>{
                  return (
                    <li className="comments" key={index}>
                      <div className="comments__wrapper">
                        <div className="comments__pic"></div>
                        <div className="comments__container">
                          <div className="comments__top">
                            <h6 className="comments__name">{comment.name}</h6>
                            <p className="comments__date">{comment.timestamp}</p>
                          </div>
                          <div className="comments__bottom">
                            <p className="comments__bottom">{comment.comment}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}</ul> 
              </li>
          )
        })}
      </ul> */}
    
    </>  
  );
};

export default App;






      





// from hardcoded component : comments


   {/* <Comments name="Michael Lyons" date="08/09/2021" description="They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed."/>
      <Comments name="Gary Wong" date="07/15/2021" description="Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"/>
      <Comments name="Theodore Duncan" date="07/11/2021" description="How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!"/> */}