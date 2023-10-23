import "./Reviewer.scss"
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg'; 

function Reviewer(){
  return (
    <>
      <h3 className="section-heading">3 Comments</h3>
      <div className="reviewer">
        <img className="img-mohanmuruge reviewer__left" src={MohanMuruge} alt="Mohan Muruge" />
        <div className="reviewer__right">
          <h3 className="reviewer__title">JOIN THE CONVERSATION</h3>
          <textarea className="reviewer__text-area" type="text" placeholder="Add a new comment" name="comment"></textarea>
          <button className="blue-btn reviewer__btn">COMMENT</button>
        </div>
      </div>
    </>
  );
};

export default Reviewer;