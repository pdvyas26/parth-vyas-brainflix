import './BlueBtn.scss';
import uploadIcon from '../../assets/images/Icons/upload.svg'



function BlueBtn (props){
    return (
        <>
        <button className="blue-btn">{props.name}
        <img className= "upload-icon" src={uploadIcon} />
        </button>
        
        </>
    )
}

export default BlueBtn;