import "./Reviewer.scss"
import MohanMuruge from '../../assets/images/Mohan-muruge.jpg'; 
import CommentIcon from '../../assets/images/Icons/add_comment.svg'
import BlueBtn from '../BlueBtn/BlueBtn'

function Reviewer({commentsLength}){


  return (
    <>
      <h3 className="section-heading">{commentsLength.length} Comments</h3>
      <div className="reviewer">
        <img className="reviewer__left" src={MohanMuruge} alt="Mohan Muruge" />
        <div className="reviewer__right">
          <div>
            <h3 className="reviewer__title">JOIN THE CONVERSATION</h3>
            <textarea className="reviewer__text-area" type="text" placeholder="Add a new comment" 
            name="comment"></textarea>
          </div>
          <BlueBtn className="reviewer__btn" name="COMMENT" image={CommentIcon}  />
        </div>
      </div>
    </>
  );
};

export default Reviewer;







 