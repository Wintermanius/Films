import { ChangeEvent, FC, useState } from "react";
import Rating from "./Rating/Rating";
import { addCommentFx } from "../../store/api";
import { Route, useNavigate, useParams } from "react-router-dom";


const CommentForm: FC = () => {
  const [comment, setComment] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const params = useParams()

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value
    setComment(value)
  }

  let isDisabled = true
  if (rating && comment.length > 39) {
    isDisabled = false
  }

  let navigate = useNavigate()

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    params.id && addCommentFx({ filmId: +params.id, formData: { comment, rating } })
    navigate(`/films/${params.id}`)
  }

  return (
    <form className="add-review__form" onSubmit={handleSubmit}>

      <div className="rating">
        <div className="rating__stars">
          <Rating onChangeRating={setRating} />
        </div>
      </div>

      <div className="add-review__text">
        <textarea maxLength={400}
          onChange={fieldChangeHandle} 
          value={comment} 
          className="add-review__textarea" 
          name="review-text" 
          id="review-text" 
          placeholder="Review text">
        </textarea>
        <div className="add-review__submit">
          <button disabled={isDisabled} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>

    </form>
  )
}

export default CommentForm
