import BrainFlixLogo from './assets/images/Logo/BrainFlix-logo.svg';
import MohanMuruge from './assets/images/Mohan-muruge.jpg'; 
import './App.css';
import Header from './components/Header/Header'
import MainVideo from './components/MainVideo/MainVideo.jsx'
import videoData from './data/video-details.json';
import Comments from './components/Comments/Comments'
import Reviewer from './components/Reviewer/Reviewer'
import Highlights from './components/Highlights/Highlights';


function App() {

  let activeVideo = videoData[0];

  return (
    <>

      <Header  />
      <MainVideo image={activeVideo.image} video={activeVideo.video}/>
      <Highlights />
      <Reviewer />
    
      <Comments name="Michael Lyons" date="08/09/2021" description="They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed."/>
      <Comments name="Gary Wong" date="07/15/2021" description="Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"/>
      <Comments name="Theodore Duncan" date="07/11/2021" description="How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!"/>

    </>  
  );
};

export default App;






      