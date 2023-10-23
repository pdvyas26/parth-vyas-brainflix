import "./Comments.scss"

function Comments(props){


    return (
      <ul>
  {props.video.comments.map((comment, index)=>{
  return (
    <li className="comments" key={index}>
      <div className="comments__wrapper">
        <div className="comments__pic"></div>
        <div className="comments__container">
          <div className="comments__top">
            <h6 className="comments__name">{comment.name}</h6>
            <p className="comments__date">{comment.timestamp}</p>
          </div>
          <div className="comments__bottom">
            <p className="comments__bottom">{comment.comment}</p>
          </div>
        </div>
      </div>
    </li>
  )
})}</ul>
  
      )
    }

export default Comments;