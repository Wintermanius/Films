import { FC } from "react"
import { ReviewType } from "../../types/review-type"
import Review from "./Review"

type ReviewListProps = {
  reviews: ReviewType[]
}

const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">              
        { reviews.map((review) => <Review key={review.id} review={review} />) }
      </div>
    </div>
  )
}

export default ReviewList
