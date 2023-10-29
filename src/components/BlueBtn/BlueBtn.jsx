import './BlueBtn.scss';
import uploadIcon from '../../assets/images/Icons/upload.svg';



function BlueBtn (props){
    return (
        <div className="wrapper">
            <button className={`blue-btn ${props.className}`}>
                <img className= "blue-btn__icon" src={props.image} />
                <p className= "blue-btn__input">{props.name}</p>
            </button>
        </div>
    )
}

export default BlueBtn;