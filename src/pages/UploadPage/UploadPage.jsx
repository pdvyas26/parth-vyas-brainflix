import "../UploadPage/UploadPage.scss"
import UploadImage from "../../assets/images/Upload-video-preview.jpg"
import BlueBtn from "../../components/BlueBtn/BlueBtn";
import PublishIcon from "../../assets/images/Icons/publish.svg"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UploadPage (){

  const navigate = useNavigate();


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post (`${process.env.REACT_APP_API_URL}/videos`, 
    {

      title: event.target.title.value,
      channel:"client channel",
      description: event.target.description.value,
      views: "0",
      likes:"0",
      duration:"0:00",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: []
  });

  alert("Video uploaded successfully");
  navigate("/");

  }

  function handleCancel() {
    navigate(-1);
  }
  
  

//STILL NEED TO ADD TRY CATCH and on the home page as well


  return (
    <div className="upload">

        <h1 className="upload__title">Upload Video</h1>

        <div className="upload__desktop-view">
          <div className="upload__desktop-view-left">
            <p className="upload__heading">VIDEO THUMBNAIL</p>
            <div className="upload__image-container">
              <img className="upload__image" src={UploadImage} alt="Upload Image" />
            </div>
          </div>

          <div className="upload__desktop-view-right">
            <p className="form__title">TITLE YOUR VIDEO</p>
            <input className="form__input" type="text" placeholder="Add a title to your video"/>
            <p className="form__description-title">ADD A VIDEO DESCRIPTION</p>
            <textarea className="form__description" placeholder="Add a description to your video" cols="30" rows="6"></textarea>
          </div>
        </div>
        

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__container">
          <p className="form__title">TITLE YOUR VIDEO</p>
          <input className="form__input" name="title" type="text" placeholder="Add a title to your video"/>
          <p className="form__description-title">ADD A VIDEO DESCRIPTION</p>
          <textarea className="form__description" name="description" placeholder="Add a description to your video" cols="30" rows="6"></textarea>
        </div>
        <div className="form__btn-container">
          <BlueBtn className="form__publish-btn" image={PublishIcon}  name="PUBLISH" />
          <p className="form__cancel-btn" onClick={handleCancel}>CANCEL</p>
        </div>      
      </form>
    </div>
  );
}

export default UploadPage;