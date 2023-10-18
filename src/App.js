import BrainFlixLogo from './assets/images/Logo/BrainFlix-logo.svg';
import MohanMuruge from './assets/images/Mohan-muruge.jpg'; 
import './App.css';
import Header from './components/Header/Header.jsx'
import MainVideo from './components/MainVideo/MainVideo.jsx'
import videoData from './data/video-details.json';


function App() {

  let activeVideo = videoData[0];

  return (
    <>
    <Header  />
    <MainVideo image={activeVideo.image} video={activeVideo.video}/>









    <section className="highlights">
        <h1 className="highlights__title">BMX Rampage: 2018 Highlights</h1>
        <div className="highlights__container">
          <div className="highlights__left">
            <h5>By Red Cow</h5>
            <h5>07/11/2021</h5>
          </div>
          <div className="highlights__right">
            <h5> views logo here</h5>
            <h5> likes logo here</h5>
          </div>
        </div>
        <p className="highlights__details">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
        </p>
    </section>

    <section>
      <h3>3 Comments</h3>
      <div className="comments">
        <img className="img-mohanmuruge comments__left" src={MohanMuruge} alt="Mohan Muruge" />
        <div className="comments__right">
          <h3 className="comments__title">JOIN THE CONVERSATION</h3>
          <input className="comments__input-box" type="text" placeholder="Add a new comment" name="comment" />
          <button className="blue-btn">COMMENT</button>
        </div>
      </div>
      <div className="Comments">
        <div className="Comments__wrapper">
          <div className="Comments__pic"></div>
          <div className="Comments__container">
            <div className="Comments__top">
              <h3 className="Comments__name">Michael Lyons</h3>
              <p className="Comments__date">08/09/2021</p>
            </div>
            <div className="Comments__bottom">
              They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.
            </div>
          </div>
        </div>
      </div>
      <div className="Comments">
        <div className="Comments__wrapper">
          <div className="Comments__pic"></div>
          <div className="Comments__container">
            <div className="Comments__top">
              <h3 className="Comments__name">Gary Wong</h3>
              <p className="Comments_-date">07/15/2021</p>
            </div>
            <div className="Comments__bottom">
            Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!
            </div>
          </div>
        </div>
      </div>
      <div className="Comments">
        <div className="Comments__wrapper">
          <div className="Comments__pic"></div>
          <div className="Comments__container">
            <div className="Comments__top">
              <h3 className="Comments__name">Theodore Duncan</h3>
              <p className="Comments_-date">07/11/2021</p>
            </div>
            <div className="Comments__bottom">
            How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!
            </div>
          </div>
        </div>
      </div>
    </section>

  
    </>

      
  );
};

export default App;






      