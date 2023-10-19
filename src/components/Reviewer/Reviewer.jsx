import "./Reviewer.scss"
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg'; 

function Reviewer(){
  return (
    <>
      <h3>3 Comments</h3>
      <div className="reviewer">
        <img className="img-mohanmuruge reviewer__left" src={MohanMuruge} alt="Mohan Muruge" />
        <div className="reviewer__right">
          <h3 className="reviewer__title">JOIN THE CONVERSATION</h3>
          <input className="reviewer__input-box" type="text" placeholder="Add a new comment" name="comment" />
          <button className="blue-btn">COMMENT</button>
        </div>
      </div>
    </>
  );
};

export default Reviewer;