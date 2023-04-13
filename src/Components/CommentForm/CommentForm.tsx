import { ChangeEvent, FC, useState } from "react";
import Rating from "./Rating/Rating";

const CommentForm: FC = ({}) => {

  const [comment, setComment] = useState('')

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value
    setComment(value)
  }

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <Rating />
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={fieldChangeHandle} 
            value={comment} 
            className="add-review__textarea" 
            name="review-text" 
            id="review-text" 
            placeholder="Review text">
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>

    </form>
  )
}

export default CommentForm
