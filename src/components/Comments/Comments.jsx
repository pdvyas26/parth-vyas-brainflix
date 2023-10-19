import "./Comments.scss"

function Comments(props){
    return (
        <div className="comments">
        <div className="comments__wrapper">
          <div className="comments__pic"></div>
          <div className="comments__container">
            <div className="comments__top">
              <h3 className="comments__name">{props.name}</h3>
              <p className="comments__date">{props.date}</p>
            </div>
            <div className="comments__bottom">
             {props.description}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Comments;