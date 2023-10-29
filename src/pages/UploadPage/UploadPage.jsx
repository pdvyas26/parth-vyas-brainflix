import "../UploadPage/UploadPage.scss"
import UploadImage from "../../assets/images/Upload-video-preview.jpg"
import BlueBtn from "../../components/BlueBtn/BlueBtn";
import PublishIcon from "../../assets/images/Icons/publish.svg"

function UploadPage (){
  return (
    <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <p className="upload__heading">VIDEO THUMBNAIL</p>
      <div className="upload__image-container">
        <img className="upload__image" src={UploadImage} alt="Upload Image" />
      </div>
      <div className="form">
        <div className="form__container">
          <p className="form__title">TITLE YOUR VIDEO</p>
          <input className="form__input" type="text" placeholder="Add a title to your video"/>
          <p className="form__description-title">ADD A VIDEO DESCRIPTION</p>
          <textarea className="form__description" placeholder="Add a description to your video" cols="30" rows="6"></textarea>
        </div>
        <div className="form__btn-container">
          <BlueBtn className="form__publish-btn" image={PublishIcon}  name="PUBLISH" />
          <p className="form__cancel-btn">CANCEL</p>
        </div>      
      </div>
    </div>
  );
}

export default UploadPage;