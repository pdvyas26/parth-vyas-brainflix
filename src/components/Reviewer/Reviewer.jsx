import "./Reviewer.scss"
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg'; 
import CommentIcon from '../../assets/images/Icons/add_comment.svg'
import BlueBtn from '../BlueBtn/BlueBtn'

function Reviewer(){
  return (
    <>
      <h3 className="section-heading">3 Comments</h3>
      <div className="reviewer">
        <img className="img-mohanmuruge reviewer__left" src={MohanMuruge} alt="Mohan Muruge" />
        <div className="reviewer__right">
          <div>
            <h3 className="reviewer__title">JOIN THE CONVERSATION</h3>
            <textarea className="reviewer__text-area" type="text" placeholder="Add a new comment" 
            name="comment"></textarea>
          </div>
          <div>
            <BlueBtn className="reviewer__btn" name="COMMENT" image={CommentIcon}  />
          </div>
        </div>

      </div>
    </>
  );
};

export default Reviewer;





<button className="blue-btn reviewer__btn">
<img className="reviewer__btn-icon" src={CommentIcon} alt="comment icon" />
<p className="reviewer__btn-comment">COMMENT</p>
</button>