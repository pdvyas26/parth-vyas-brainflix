import "../UploadPage/UploadPage.scss"
import UploadImage from "../../assets/images/Upload-video-preview.jpg"
import BlueBtn from "../../components/BlueBtn/BlueBtn";

function UploadPage (){
  return (
    <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <p className="upload__heading">VIDEO THUMBNAIL</p>
      <div className="upload__image-container">
        <img className="upload__image" src={UploadImage} alt="Upload Image" />
      </div>
      <div className="form">
        <p className="form__title">TITLE YOUR VIDEO</p>
        <input className="form__input" type="text" placeholder="Add a title to your video"/>
        <p className="form__description-title">ADD A VIDEO DESCRIPTION</p>
        <textarea className="form__description" name="Add a description to your video" id="" cols="30" rows="10"></textarea>
        <BlueBtn name="PUBLISH" />
        <p>CANCEL</p>
      </div>
    </div>
  );
}

export default UploadPage;