
import './SelectedVideo.scss'
import ViewsIcon from '../../assets/images/Icons/views.svg'
import LikesIcon from '../../assets/images/Icons/likes.svg'



function SelectedVideo (props){

  function displayTimestamp(timestamp){
    let formattedTimestamp = new Date(timestamp).toLocaleDateString();
    return formattedTimestamp;
  }

return (
  <section>
    <div className='video-wrapper'>
      <video className = "video-player" src={props.video.video + '?api_key=test'} poster={props.video.image} controls></video>
    </div>
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
  </section>
)}



// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';





// const apiKey = "d1007b1d-c54d-4781-80cb-cc1ff5db11be";
// const [selectedVideo, setSelectedVideo] = useState({});


// const params = useParams();

// console.log(props);



// useEffect (()=> {
//   async function fetchVideo() {
//     if (!params.id) {
//       // if there is no params.id set the selectedRecipe to the default first element of recipes array
//       //  1) get all recipes
//       //  2) get selected recipe using the first element of the recipes data (response.data[0].id)
//       const response = await axios.get(
//         `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
//       );

//       const selectedResponse = await axios.get(
//         `https://project-2-api.herokuapp.com/videos/${response.data[0].id}?api_key=${apiKey}`
//       );
//       setSelectedVideo(selectedResponse.data);
//     } else {
//       // else if there is a params.id use it to get the selectedRecipe
//       const selectedResponse = await axios.get(
//         `https://project-2-api.herokuapp.com/videos/${params.id}?api_key=${apiKey}`
//       );
//       setSelectedVideo(selectedResponse.data);
//     }
//   }

//   // Call the fetchRecipe() function
//   fetchVideo();
// }, [params.id]);







  



  // function SelectedVideo(props){

    // function displayTimestamp(timestamp){
    //   let formattedTimestamp = new Date(timestamp).toLocaleDateString();
    //   return formattedTimestamp;
    // }
  
  //     return (
      // <section>
      //   <div className='video-wrapper'>
      //     <video className = "video-player" src={props.video.video + '?api_key=test'} poster={props.video.image} controls></video>
      //   </div>
      //   <h2 className = "video-player__title">{props.video.title}</h2>
      //   <div className = "highlights">
      //     <div className = "highlights__left">
      //         <h4 className="highlights__left-channel" >{props.video.channel}</h4>
      //         <p className="highlights__left-date">{displayTimestamp(props.video.timestamp)}</p>
      //     </div>
      //     <div className = "highlights__right">
      //       <div className = "highlights__right-container">
      //         <img className="highlights__right-icon" src={ViewsIcon} alt="views icon" />
      //         <p>{props.video.views}</p>
      //       </div>
      //       <div className = "highlights__right-container">
      //         <img className="highlights__right-icon" src={LikesIcon} alt="Likes Icon" />
      //         <p>{props.video.likes}</p>
      //       </div>
      //     </div>
      //   </div>
      //   <p className = "highlights__description">{props.video.description}</p>
      // </section>
  //     )
    
  //   }

  export default SelectedVideo;