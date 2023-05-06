import { FC } from "react"
import { ReviewType } from "../../types/review-type"

type ReviewProps = {
  review: ReviewType
}

const Review: FC<ReviewProps> = ({review}) => {

  const {comment, user, date, rating} = review  

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const rewievDate = new Date(date)
  const year = rewievDate.getFullYear()
  const month = rewievDate.getMonth()
  const day = rewievDate.getDate()
  const Month = monthNames[month]
  
  return (
    <>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>
          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={date}>{Month} {day}, {year}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
    </>
  )
}

export default Review
