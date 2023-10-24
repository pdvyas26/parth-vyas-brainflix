import './BlueBtn.scss';
import uploadIcon from '../../assets/images/Icons/upload.svg';



function BlueBtn (props){
    return (
        <div className="wrapper">
            <button className="blue-btn">
                <img className= "blue-btn__icon" src={uploadIcon} />
                <p className= "blue-btn__input">{props.name}</p>
            </button>
        </div>
    )
}

export default BlueBtn;