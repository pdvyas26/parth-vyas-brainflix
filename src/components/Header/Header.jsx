import BrainFlixLogo from '../../assets/images/Logo/BrainFlix-logo.svg';
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg';
import './Header.scss';

function Header (){
    return (
    <header className="header">
      <img src={BrainFlixLogo} className="header__logo" alt="logo" />
      <div className="header__input-container">
        <input className="header__input" type="text" placeholder="Search" name="search" />
        <img className="img-mohanmuruge" src={MohanMuruge} alt="Mohan Muruge" />
      </div>
      <button className="blue-btn">UPLOAD</button>
    </header>
    )
  }

  export default Header;