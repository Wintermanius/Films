import { FC } from "react"
import { ReviewType } from "../../types/review-type"

type ReviewProps = {
  review: ReviewType
}

const Review: FC<ReviewProps> = ({review}) => {

  const {comment, user, date, rating} = review  

  return (
    <>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>
          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={date}>{date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
    </>
  )
}

export default Review
