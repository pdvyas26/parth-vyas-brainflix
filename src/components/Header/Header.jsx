import { Link } from 'react-router-dom';
import BrainFlixLogo from '../../assets/images/Logo/BrainFlix-logo.svg';
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import BlueBtn from '../BlueBtn/BlueBtn';
import './Header.scss';
import UploadIcon from '../../assets/images/Icons/upload.svg'


function Header (){
    return (
    <header className="header">
      <Link to="/"><img src={BrainFlixLogo} className="header__logo" alt="logo" /></Link>
      <div className="header__input-container">
        <input className="header__input" type="text" placeholder="Search" name="search" />
        <img className="img-mohanmuruge" src={MohanMuruge} alt="Mohan Muruge" /> 
      </div>
      <Link className="header__link" to="/uploadpage">
        <BlueBtn className="header__btn" image={UploadIcon} name="UPLOAD" />
      </Link>
      <img className="img-mohanmuruge-tablet" src={MohanMuruge} alt="Mohan Muruge" /> 
    </header>
    )
  }

  export default Header;