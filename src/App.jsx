import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import "./app.scss"
import VideoList from "./components/VideoList/VideoList";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";


function App (){
  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uploadpage" element={<UploadPage/>} />
        <Route path="/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;












































// import { useState } from "react";
// import './App.css';
// import Header from './components/Header/Header'
// import SelectedVideo from './components/SelectedVideo/SelectedVideo'
// import videoData from './data/video-details.json';
// import Comments from './components/Comments/Comments'
// import Reviewer from './components/Reviewer/Reviewer'
// import VideoList from "./components/VideoList/VideoList";




// function App() {


//   const [videos, setVideos] = useState(videoData);
//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);

//   function handleVideoSelection(id) {
//     const foundVideo = videoData.find((video) => video.id === id);
//     setSelectedVideo(foundVideo);
//   }

//   return (
//     <>
//     <Header  />
//         <SelectedVideo video={selectedVideo} />
//     <div className="main">
//       <div className="main__container">
//         <Reviewer />
//         <Comments video={selectedVideo}/>
//       </div>
//       <div className="main__video-list">
//       <h3 className="main__next-videos">Next Videos</h3>
//       <VideoList videoData={videoData} selectedVideo={selectedVideo} handleVideoSelection={handleVideoSelection}/>
//       </div>
//     </div>
      
//     </>
//   );
// };

// export default App;





